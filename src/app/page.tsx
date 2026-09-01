// Server Component — providers and sticky chrome (Navbar, RitualButtons,
// MusicPlayer, FlowerShower) now live in layout.tsx so they're shared
// across every route, including the /explore/[slug] category pages.
import { VideoBackground } from '@/components/VideoBackground';
import { AlponaCorners } from '@/components/AlponaCorners';
import { Hero } from '@/components/Hero';
import { ScrollCue } from '@/components/ScrollCue';
import { ExploreSection } from '@/components/ExploreSection';
import { AboutSection } from '@/components/AboutSection';

export default function Page() {
  return (
    <>
      <section id="home" className="stage">
        <VideoBackground />
        <AlponaCorners />
        <Hero />
        <ScrollCue targetId="puja-days" />
      </section>

      <ExploreSection />
      <AboutSection />
    </>
  );
}
