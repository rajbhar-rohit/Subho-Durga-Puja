'use client';

import { useEffect, useState } from 'react';

// Responsive video background component that switches videos on mobile
export function VideoBackground() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkMobile();

    // Listen for resize events
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrc = isMobile ? '/assets/bg-video-mobile.mp4' : '/assets/bg-video.mp4';

  return (
    <>
      <div className="bg-fallback" />
      <video key={videoSrc} className="bg-video" autoPlay muted loop playsInline>
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="vignette" />
    </>
  );
}
