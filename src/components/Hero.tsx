'use client';

import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <div className="hero">
      <p className="hero-bengali">{t.heroTitle}</p>
      <span className="hero-eng">{t.heroEyebrow}</span>
      <p className="hero-tagline">{t.heroTagline}</p>
    </div>
  );
}
