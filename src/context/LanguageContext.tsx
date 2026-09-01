'use client';

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language } from '@/lib/translations';

interface LanguageContextValue {
  language: Language;
  t: (typeof translations)['bn'];
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('bn');

  // Keep the document's lang attribute honest for accessibility/SEO.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function toggleLanguage() {
    setLanguage((prev) => (prev === 'bn' ? 'en' : 'bn'));
  }

  return (
    <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
