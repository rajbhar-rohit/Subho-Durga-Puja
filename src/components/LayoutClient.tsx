'use client';

import { usePathname } from 'next/navigation';
import { RitualButtons } from '@/components/RitualButtons';
import { MusicPlayer } from '@/components/MusicPlayer';

export function LayoutClient() {
  const pathname = usePathname();
  const isPandalMapPage = pathname.includes('pandal-map');

  if (isPandalMapPage) {
    return null;
  }

  return (
    <>
      <RitualButtons />
      <MusicPlayer />
    </>
  );
}
