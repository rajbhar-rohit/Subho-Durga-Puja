'use client';

import { useLanguage } from '@/context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  return (
    <section id="about" className="about-section">
      <div className="about-card glass">
        <h2>{t.aboutHeading}</h2>
        <p>{t.aboutBody}</p>
      </div>
    </section>
  );
}
