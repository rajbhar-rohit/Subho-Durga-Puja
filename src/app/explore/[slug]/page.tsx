import { notFound } from 'next/navigation';
import { EXPLORE_CATEGORIES } from '@/lib/exploreCategories';
import { getExploreImages } from '@/lib/exploreImages';
import { ExploreDetail } from '@/components/ExploreDetail';
import { PandalMapPage } from '@/components/PandalMapPage';
import { PandalExploreDetail } from '@/components/PandalExploreDetail';

export function generateStaticParams() {
  return EXPLORE_CATEGORIES.map((category) => ({ slug: category.slug }));
}

export default async function ExploreCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = EXPLORE_CATEGORIES.find((c) => c.slug === slug);
  if (!category) {
    notFound();
  }

  if (category.kind === 'map') {
    return <PandalMapPage />;
  }

  if (slug === 'pandal') {
    return <PandalExploreDetail />;
  }

  return <ExploreDetail categoryKey={category.key} images={getExploreImages(category.slug)} />;
}
