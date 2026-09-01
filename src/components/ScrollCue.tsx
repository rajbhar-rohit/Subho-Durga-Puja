'use client';

import { useLanguage } from '@/context/LanguageContext';

export function ScrollCue({ targetId }: { targetId: string }) {
  const { t } = useLanguage();
  return (
    <a href={`#${targetId}`} className="scroll-cue" aria-label={t.scrollCue}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M12 4v14M6 13l6 6 6-6" />
      </svg>
    </a>
  );
}
