import type { FC } from 'react';
import type { ExploreSlug } from '@/lib/translations';

function PandalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M12 2l9 6H3l9-6Z" />
      <path d="M5 8v12M19 8v12M9 8v12M15 8v12" />
      <path d="M3 20h18" />
    </svg>
  );
}

function PandalMapIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.6" />
    </svg>
  );
}

function AlponaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function SindoorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M12 3c3 3 6 6.5 6 10a6 6 0 0 1-12 0c0-3.5 3-7 6-10Z" />
    </svg>
  );
}

function BhogIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4}>
      <path d="M4 12a8 8 0 0 0 16 0" />
      <path d="M4 12h16" />
      <path d="M12 12V5c2 0 3 1.5 3 3" />
    </svg>
  );
}

export const EXPLORE_ICONS: Record<ExploreSlug, FC> = {
  pandal: PandalIcon,
  pandalMap: PandalMapIcon,
  alpona: AlponaIcon,
  sindoorKhela: SindoorIcon,
  bhog: BhogIcon,
};
