'use client';

import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useShare } from '@/hooks/useShare';
import { useFlowerShower } from '@/context/FlowerShowerContext';

// Put your own sound effects here:
//   public/assets/dhak-beat.mp3   -> loops on/off with the Dhak Beats button
//   public/assets/ulu-dhwani.mp3  -> plays once per tap of Ulu Dhwani
export function RitualButtons() {
  const { t } = useLanguage();
  const { share } = useShare();
  const { triggerShower } = useFlowerShower();
  const dhakRef = useRef<HTMLAudioElement>(null);
  const uluRef = useRef<HTMLAudioElement>(null);
  const [dhakActive, setDhakActive] = useState(false);
  const [uluActive, setUluActive] = useState(false);

  function toggleDhak() {
    const audio = dhakRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
      setDhakActive(true);
    } else {
      audio.pause();
      audio.currentTime = 0;
      setDhakActive(false);
    }
  }

  function playUlu() {
    const audio = uluRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
    setUluActive(true);
    setTimeout(() => setUluActive(false), 900);
  }

  return (
    <>
      <nav className="ritual-buttons">
        <button
          className={`ritual-btn glass${dhakActive ? ' active' : ''}`}
          onClick={toggleDhak}
          aria-pressed={dhakActive}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <ellipse cx="12" cy="6" rx="6" ry="2.6" />
            <path d="M6 6v9c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6V6" />
            <path d="M6 10.5c0 1.4 2.7 2.6 6 2.6s6-1.2 6-2.6" />
          </svg>
          {t.dhakBeats}
        </button>

        <button className={`ritual-btn glass${uluActive ? ' active' : ''}`} onClick={playUlu}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path d="M4 15c0-6 3-11 8-11s6 4 6 7-2 5-5 5-4-2-4-4 1.5-3 3-3" />
          </svg>
          {t.uluDhwani}
        </button>

        <button className="ritual-btn glass" onClick={triggerShower}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <circle cx="12" cy="12" r="2.4" />
            <path d="M12 2.5c1.8 0 3 1.8 3 3.5s-1.2 3-3 3-3-1.3-3-3 1.2-3.5 3-3.5Z" />
            <path d="M12 21.5c1.8 0 3-1.8 3-3.5s-1.2-3-3-3-3 1.3-3 3 1.2 3.5 3 3.5Z" />
            <path d="M2.5 12c0-1.8 1.8-3 3.5-3s3 1.2 3 3-1.3 3-3 3-3.5-1.2-3.5-3Z" />
            <path d="M21.5 12c0-1.8-1.8-3-3.5-3s-3 1.2-3 3 1.3 3 3 3 3.5-1.2 3.5-3Z" />
          </svg>
          {t.flowerShower}
        </button>

        {/* <button className="ritual-btn glass" onClick={share}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <circle cx="18" cy="5" r="2.4" />
            <circle cx="6" cy="12" r="2.4" />
            <circle cx="18" cy="19" r="2.4" />
            <path d="M8.2 10.8l7.6-4.2M8.2 13.2l7.6 4.2" />
          </svg>
          {t.share}
        </button> */}
      </nav>

      <audio ref={dhakRef} src="/assets/dhak-beat.mp3" loop preload="none" />
      <audio ref={uluRef} src="/assets/ulu-dhwani.mp3" preload="none" />
    </>
  );
}
