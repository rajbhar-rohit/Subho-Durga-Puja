'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { ExploreSlug } from '@/lib/translations';
import { EXPLORE_ICONS } from './exploreIcons';

interface ExploreDetailProps {
  categoryKey: ExploreSlug;
  images: string[];
}

export function ExploreDetail({ categoryKey, images }: ExploreDetailProps) {
  const { t } = useLanguage();
  const copy = t.explore[categoryKey];
  const Icon = EXPLORE_ICONS[categoryKey];

  return (
    <div className="detail-page">
      <div className="detail-header glass">
        <Link href="/#explore" className="detail-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M15 6l-6 6 6 6" />
          </svg>
          {t.navExplore}
        </Link>
        <h1>{copy.title}</h1>
        <p>{copy.desc}</p>
      </div>

      {images.length > 0 ? (
        <div className="detail-gallery">
          {images.map((src) => (
            <div className="detail-photo glass" key={src}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      ) : (
        <div className="detail-empty glass">
          <Icon />
          <p>{t.explorePageEmpty}</p>
        </div>
      )}
    </div>
  );
}
