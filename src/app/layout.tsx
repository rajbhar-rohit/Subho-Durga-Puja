import type { Metadata } from 'next';
import { Hind_Siliguri, Cinzel } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { ToastProvider } from '@/context/ToastContext';
import { FlowerShowerProvider } from '@/context/FlowerShowerContext';
import { Navbar } from '@/components/Navbar';
import { FlowerShower } from '@/components/FlowerShower';
import { LayoutClient } from '@/components/LayoutClient';

const hindSiliguri = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-label',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'শুভ দুর্গা পূজা · Durga Puja',
  description:
    'A Durga Puja celebration experience — dhak beats, ulu dhwani, flower shower, and a festival playlist.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="bn">
      <body className={`${hindSiliguri.variable} ${cinzel.variable}`}>
        <LanguageProvider>
          <ToastProvider>
            <FlowerShowerProvider>
              {/* Sticky across every page, not just the homepage */}
              <Navbar />
              <FlowerShower />

              <main>{children}</main>

              <LayoutClient />
            </FlowerShowerProvider>
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
