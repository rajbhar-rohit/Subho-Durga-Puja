'use client';

import { useLanguage } from '@/context/LanguageContext';

export function ExploreHeading() {
  const { t } = useLanguage();
  return (
    <div className="explore-heading-block">
      <h2 className="explore-heading">{t.exploreHeading}</h2>
      <p className="explore-subheading">{t.exploreSubheading}</p>
    </div>
  );
}
