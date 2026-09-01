import type { ExploreSlug } from './translations';

export interface ExploreCategory {
  /** URL-friendly slug — also the folder name under public/assets/explore for gallery categories */
  slug: string;
  /** Key into translations.explore for this category's title/description */
  key: ExploreSlug;
  /** 'gallery' reads photos from public/assets/explore/<slug>; 'map' renders the Pandal Map */
  kind: 'gallery' | 'map';
}

export const EXPLORE_CATEGORIES: ExploreCategory[] = [
  { slug: 'pandal', key: 'pandal', kind: 'gallery' },
  { slug: 'pandal-map', key: 'pandalMap', kind: 'map' },
  { slug: 'alpona', key: 'alpona', kind: 'gallery' },
  { slug: 'sindoor-khela', key: 'sindoorKhela', kind: 'gallery' },
  { slug: 'bhog', key: 'bhog', kind: 'gallery' },
];
