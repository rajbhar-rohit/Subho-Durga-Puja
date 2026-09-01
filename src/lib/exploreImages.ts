import fs from 'fs';
import path from 'path';

const IMAGE_EXTENSIONS = /\.(jpe?g|png|webp|avif|gif)$/i;

/** Returns public URLs for every image file in public/assets/explore/<slug>. */
export function getExploreImages(slug: string): string[] {
  try {
    const fullPath = path.join(process.cwd(), 'public', 'assets', 'explore', slug);
    return fs
      .readdirSync(fullPath)
      .filter((file) => IMAGE_EXTENSIONS.test(file))
      .sort()
      .map((file) => `/assets/explore/${slug}/${file}`);
  } catch {
    // Folder doesn't exist yet, or is empty — callers fall back to an icon.
    return [];
  }
}
