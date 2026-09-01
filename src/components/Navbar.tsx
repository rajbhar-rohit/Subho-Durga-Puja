'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useShare } from '@/hooks/useShare';
import { LanguageToggle } from './LanguageToggle';

export function Navbar() {
  const { t } = useLanguage();
  const { share } = useShare();

  return (
    <header className="navbar glass">
      <a href="/" className="navbar-brand" aria-label="Durga Puja — home">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
          <path d="M12 2.5c1.8 0 3 1.8 3 3.5s-1.2 3-3 3-3-1.3-3-3 1.2-3.5 3-3.5Z" />
          <path d="M12 21.5c1.8 0 3-1.8 3-3.5s-1.2-3-3-3-3 1.3-3 3 1.2 3.5 3 3.5Z" />
          <path d="M2.5 12c0-1.8 1.8-3 3.5-3s3 1.2 3 3-1.3 3-3 3-3.5-1.2-3.5-3Z" />
          <path d="M21.5 12c0-1.8-1.8-3-3.5-3s-3 1.2-3 3 1.3 3 3 3 3.5-1.2 3.5-3Z" />
        </svg>
      </a>

      <nav className="navbar-links">
        <a href="/#puja-days">{t.navPujaDays}</a>
        <a href="/#explore">{t.navExplore}</a>
        <a href="/#about">{t.navAbout}</a>
      </nav>

      <div className="navbar-actions">
        <LanguageToggle />
        <button className="icon-btn" onClick={share} aria-label={t.share}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <circle cx="18" cy="5" r="2.4" />
            <circle cx="6" cy="12" r="2.4" />
            <circle cx="18" cy="19" r="2.4" />
            <path d="M8.2 10.8l7.6-4.2M8.2 13.2l7.6 4.2" />
          </svg>
        </button>
      </div>
    </header>
  );
}
