'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

// Minimal shape of the pieces of the YouTube IFrame API this hook touches.
// The real global is much bigger; we only type what we use.
interface YTPlayerInstance {
  playVideo: () => void;
  pauseVideo: () => void;
  nextVideo: () => void;
  previousVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  getVideoData: () => { title?: string; author?: string };
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        el: HTMLElement,
        opts: {
          height: string;
          width: string;
          playerVars: Record<string, string>;
          events: {
            onReady: () => void;
            onStateChange: (e: { data: number }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState: { PLAYING: number };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface UseYouTubePlayerOptions {
  playlistId: string;
}

const PLACEHOLDER_ID = 'PLACEHOLDER_PLAYLIST_ID';

export function useYouTubePlayer({ playlistId }: UseYouTubePlayerOptions) {
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<YTPlayerInstance | null>(null);

  const [ready, setReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const refreshTrackInfo = useCallback(() => {
    const data = playerRef.current?.getVideoData?.();
    if (data) {
      setTitle(data.title || '');
      setArtist(data.author || '');
    }
  }, []);

  useEffect(() => {
    if (!playlistId || playlistId === PLACEHOLDER_ID || !containerRef.current) return;

    let cancelled = false;

    function createPlayer() {
      if (cancelled || !window.YT || !containerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        height: '100%',
        width: '100%',
        playerVars: {
          listType: 'playlist',
          list: playlistId,
          controls: '0', // we drive playback with our own buttons
          modestbranding: '1',
          rel: '0',
          disablekb: '1',
          iv_load_policy: '3',
        },
        events: {
          onReady: () => {
            setReady(true);
            refreshTrackInfo();
          },
          onStateChange: (e) => {
            setIsPlaying(e.data === window.YT!.PlayerState.PLAYING);
            refreshTrackInfo();
          },
        },
      });
    }

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      const existingTag = document.getElementById('youtube-iframe-api');
      if (!existingTag) {
        const tag = document.createElement('script');
        tag.id = 'youtube-iframe-api';
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
      }
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        createPlayer();
      };
    }

    return () => {
      cancelled = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
    };
  }, [playlistId, refreshTrackInfo]);

  useEffect(() => {
    if (!ready) return;
    const interval = setInterval(() => {
      setCurrentTime(playerRef.current?.getCurrentTime?.() ?? 0);
      setDuration(playerRef.current?.getDuration?.() ?? 0);
    }, 500);
    return () => clearInterval(interval);
  }, [ready]);

  const play = useCallback(() => playerRef.current?.playVideo?.(), []);
  const pause = useCallback(() => playerRef.current?.pauseVideo?.(), []);
  const next = useCallback(() => playerRef.current?.nextVideo?.(), []);
  const prev = useCallback(() => playerRef.current?.previousVideo?.(), []);
  const seekTo = useCallback((seconds: number) => playerRef.current?.seekTo?.(seconds, true), []);
  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  return {
    containerRef,
    ready,
    isPlaying,
    title,
    artist,
    currentTime,
    duration,
    play,
    pause,
    next,
    prev,
    seekTo,
    toggle,
  };
}
