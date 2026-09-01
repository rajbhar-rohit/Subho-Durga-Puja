// Server Component — reads public/assets/explore/* from disk.
import { EXPLORE_CATEGORIES } from '@/lib/exploreCategories';
import { getExploreImages } from '@/lib/exploreImages';
import { ExploreHeading } from './ExploreHeading';
import { ExploreCard } from './ExploreCard';
import { UploadImagesCard } from './UploadImagesCard';
import { CountdownTimer } from './CountdownTimer';

export function ExploreSection() {
  return (
    <section id="explore" className="explore-section">
      <CountdownTimer />
      <ExploreHeading />
      <div className="explore-grid">
        {EXPLORE_CATEGORIES.map((category) => (
          <ExploreCard
            key={category.slug}
            slug={category.slug}
            categoryKey={category.key}
            images={category.kind === 'gallery' ? getExploreImages(category.slug) : []}
          />
        ))}
        <UploadImagesCard />
      </div>
    </section>
  );
}
