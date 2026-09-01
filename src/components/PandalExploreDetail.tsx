'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PANDAL_IMAGES } from '@/lib/pandal-images';
import { EXPLORE_ICONS } from './exploreIcons';
import { PandalImageViewer } from './PandalImageViewer';

export function PandalExploreDetail() {
  const { t } = useLanguage();
  const [imageViewerOpen, setImageViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const copy = t.explore.pandal;
  const Icon = EXPLORE_ICONS.pandal;

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setImageViewerOpen(true);
  };

  return (
    <div className="detail-page">
      <div className="detail-header glass">
        <Link href="/#explore" className="detail-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M15 6l-6 6 6 6" />
          </svg>
          {t.navExplore}
        </Link>
        <h1>{copy.title}</h1>
        <p>{copy.desc}</p>
      </div>

      {PANDAL_IMAGES.length > 0 ? (
        <div className="pandal-explore-container">
          {PANDAL_IMAGES.map((image, idx) => (
            <div
              key={idx}
              className="pandal-explore-image-card"
              onClick={() => handleImageClick(idx)}
            >
              <img
                src={image}
                alt={`Pandal Image ${idx + 1}`}
                className="pandal-explore-image"
              />
              <div className="pandal-explore-overlay">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 21H3V3h18M8 8h8v8H8z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="detail-empty glass">
          <Icon />
          <p>{t.explorePageEmpty}</p>
        </div>
      )}

      {PANDAL_IMAGES.length > 0 && (
        <PandalImageViewer
          images={PANDAL_IMAGES}
          pandalName="Pandal"
          isOpen={imageViewerOpen}
          onClose={() => setImageViewerOpen(false)}
          initialIndex={currentImageIndex}
        />
      )}

      <style jsx>{`
        .pandal-explore-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
          margin-top: 24px;
        }

        .pandal-explore-image-card {
          position: relative;
          aspect-ratio: 4 / 3;
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          background: rgba(0, 0, 0, 0.2);
          border: 2px solid rgba(243, 217, 139, 0.2);
          transition: all 0.3s ease;
        }

        .pandal-explore-image-card:hover {
          transform: scale(1.05);
          border-color: rgba(243, 217, 139, 0.5);
        }

        .pandal-explore-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .pandal-explore-image-card:hover .pandal-explore-image {
          transform: scale(1.1);
        }

        .pandal-explore-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .pandal-explore-image-card:hover .pandal-explore-overlay {
          opacity: 1;
        }

        .pandal-explore-overlay svg {
          width: 36px;
          height: 36px;
          color: #f3d98b;
        }

        @media (max-width: 768px) {
          .pandal-explore-container {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 12px;
          }

          .pandal-explore-overlay svg {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </div>
  );
}
