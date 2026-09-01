'use client';

import { useYouTubePlayer } from '@/hooks/useYouTubePlayer';
import { useLanguage } from '@/context/LanguageContext';

// Replace with your own playlist's ID — the part after "list=" in a
// YouTube playlist URL. The playlist needs to be Public or Unlisted.
const YT_PLAYLIST_ID = 'PLdGDBUCUIzp4';

function formatTime(totalSeconds: number) {
  const s = Math.max(0, Math.floor(totalSeconds || 0));
  const minutes = Math.floor(s / 60);
  const seconds = s % 60;
  return `${minutes}:${String(seconds).padStart(2, '0')}`;
}

export function MusicPlayer() {
  const { t } = useLanguage();
  const { containerRef, isPlaying, title, artist, currentTime, duration, toggle, next, prev, seekTo } =
    useYouTubePlayer({ playlistId: YT_PLAYLIST_ID });

  const pct = duration ? (currentTime / duration) * 100 : 0;
  const displayTitle = title || t.playlistPlaceholder;
  const displayArtist = artist || t.defaultArtist;

  return (
    <div className="player-bar glass">
      <div className="player-art">
        {/* The YouTube IFrame API replaces this div with the actual video iframe. */}
        <div ref={containerRef} className="player-art-mount" />
      </div>

      <div className="player-info">
        <p className="player-title">{displayTitle}</p>
        <p className="player-artist">{displayArtist}</p>
        <div className="player-progress">
          <span>{formatTime(currentTime)}</span>
          <input
            type="range"
            min={0}
            max={100}
            value={pct}
            style={{ ['--pct' as unknown as string]: `${pct}%` }}
            onChange={(e) => seekTo((Number(e.target.value) / 100) * duration)}
          />
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="player-controls">
        <button onClick={prev} aria-label="Previous track">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 6h2v12H6zM20 6L10 12l10 6z" />
          </svg>
        </button>
        <button id="playBtn" onClick={toggle} aria-label="Play or pause">
          {isPlaying ? (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5l12 7-12 7z" />
            </svg>
          )}
        </button>
        <button onClick={next} aria-label="Next track">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 6h2v12h-2zM4 6l10 6-10 6z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
