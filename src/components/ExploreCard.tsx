'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import type { ExploreSlug } from '@/lib/translations';
import { EXPLORE_ICONS } from './exploreIcons';

interface ExploreCardProps {
  /** URL slug — links to /explore/<slug> */
  slug: string;
  /** Key into translations.explore for this category's copy */
  categoryKey: ExploreSlug;
  images: string[];
}

export function ExploreCard({ slug, categoryKey, images }: ExploreCardProps) {
  const { t } = useLanguage();
  const copy = t.explore[categoryKey];
  const Icon = EXPLORE_ICONS[categoryKey];

  return (
    <Link href={`/explore/${slug}`} className="explore-card glass">
      <div className="explore-card-media">
        {images.length > 0 ? (
          <div className="explore-card-gallery">
            {images.slice(0, 4).map((src) => (
              <div className="explore-thumb" key={src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        ) : (
          <div className="explore-card-placeholder">
            <Icon />
          </div>
        )}
      </div>
      <h3 className="explore-card-title">{copy.title}</h3>
      <p className="explore-card-desc">{copy.desc}</p>
      <span className="explore-card-cta" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </span>
    </Link>
  );
}
