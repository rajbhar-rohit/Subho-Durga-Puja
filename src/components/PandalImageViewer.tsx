'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PandalImageViewerProps {
  images: string[];
  pandalName: string;
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}

export function PandalImageViewer({
  images,
  pandalName,
  isOpen,
  onClose,
  initialIndex = 0,
}: PandalImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div
      className="image-viewer-overlay"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-label="Image viewer"
      tabIndex={0}
    >
      <div className="image-viewer-container" onClick={(e) => e.stopPropagation()}>
        <div className="image-viewer-header">
          <h2>{pandalName}</h2>
          <button
            className="image-viewer-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="image-viewer-main">
          <div className="image-viewer-image-wrapper">
            <img
              src={currentImage}
              alt={`${pandalName} - Image ${currentIndex + 1}`}
              className="image-viewer-image"
            />
          </div>

          {hasMultiple && (
            <div className="image-viewer-nav">
              <button
                onClick={handlePrevious}
                className="image-viewer-btn prev"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="image-viewer-btn next"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          )}
        </div>

        {hasMultiple && (
          <div className="image-viewer-footer">
            <div className="image-viewer-counter">
              {currentIndex + 1} / {images.length}
            </div>
            <div className="image-viewer-thumbnails">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  className={`image-viewer-thumb${
                    idx === currentIndex ? ' active' : ''
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View image ${idx + 1}`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="image-viewer-thumb-img"
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .image-viewer-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .image-viewer-container {
          background: rgba(23, 3, 3, 0.95);
          border-radius: 12px;
          overflow: hidden;
          max-width: 900px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .image-viewer-header {
          padding: 16px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .image-viewer-header h2 {
          margin: 0;
          font-size: 1.25rem;
          color: #f3d98b;
        }

        .image-viewer-close {
          background: none;
          border: none;
          color: #f3d98b;
          font-size: 1.5rem;
          cursor: pointer;
          padding: 4px 8px;
          line-height: 1;
          transition: color 0.2s;
        }

        .image-viewer-close:hover {
          color: #ffed99;
        }

        .image-viewer-main {
          flex: 1;
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .image-viewer-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-viewer-image {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
          object-fit: contain;
        }

        .image-viewer-nav {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 16px;
          pointer-events: none;
        }

        .image-viewer-btn {
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: #f3d98b;
          font-size: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          pointer-events: auto;
        }

        .image-viewer-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
        }

        .image-viewer-footer {
          padding: 16px 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .image-viewer-counter {
          text-align: center;
          color: #f3d98b;
          font-size: 0.875rem;
        }

        .image-viewer-thumbnails {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .image-viewer-thumb {
          position: relative;
          width: 60px;
          height: 60px;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          flex-shrink: 0;
          background: rgba(0, 0, 0, 0.5);
          transition: border-color 0.2s;
        }

        .image-viewer-thumb:hover {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .image-viewer-thumb.active {
          border-color: #f3d98b;
        }

        .image-viewer-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .image-viewer-overlay {
            padding: 12px;
          }

          .image-viewer-container {
            max-height: 95vh;
          }

          .image-viewer-header h2 {
            font-size: 1rem;
          }

          .image-viewer-btn {
            width: 40px;
            height: 40px;
            font-size: 1.5rem;
          }

          .image-viewer-thumbnails {
            max-width: 100%;
          }

          .image-viewer-thumb {
            width: 48px;
            height: 48px;
          }
        }
      `}</style>
    </div>
  );
}
