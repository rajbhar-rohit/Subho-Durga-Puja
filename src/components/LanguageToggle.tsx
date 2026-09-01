'use client';

import { useLanguage } from '@/context/LanguageContext';

// Inline nav-bar control (no longer a floating corner button).
export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      className="lang-toggle"
      onClick={toggleLanguage}
      aria-label={language === 'bn' ? 'Switch site language to English' : 'সাইটের ভাষা বাংলায় পরিবর্তন করুন'}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} aria-hidden="true">
        <path d="M4 5h9M8 3v2m0 0c0 4-1.5 7.5-5 9.5M6 9.5c1.2 1.8 3 3 5 3.5" />
        <path d="M13 21l4-9 4 9M14.7 18h4.6" />
      </svg>
      <span>{language === 'bn' ? 'EN' : 'বাং'}</span>
    </button>
  );
}
