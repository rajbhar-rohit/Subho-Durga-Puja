'use client';

import { useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { PANDALS, type Pandal } from '@/lib/pandals';
import { distanceKm } from '@/lib/geo';

// Leaflet touches window/document at import time, so this must never be
// server-rendered.
const PandalMapView = dynamic(() => import('./PandalMapView'), {
  ssr: false,
  loading: () => <div className="pandal-map-canvas pandal-map-loading" />,
});

type LocationStatus = 'idle' | 'loading' | 'granted' | 'denied';

export function PandalMapPage() {
  const { t } = useLanguage();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [status, setStatus] = useState<LocationStatus>('idle');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function useMyLocation() {
    if (!navigator.geolocation) {
      setStatus('denied');
      return;
    }
    setStatus('loading');
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
        setStatus('granted');
      },
      () => setStatus('denied'),
      { enableHighAccuracy: true, timeout: 10000 }
    );
  }

  const sortedPandals = useMemo(() => {
    if (!userLocation) return PANDALS;
    return [...PANDALS].sort(
      (a, b) => distanceKm(userLocation, a) - distanceKm(userLocation, b)
    );
  }, [userLocation]);

  const selectedPandal = sortedPandals.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="detail-page">
      <div className="detail-header glass">
        <Link href="/#explore" className="detail-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M15 6l-6 6 6 6" />
          </svg>
          {t.navExplore}
        </Link>
        <h1>{t.explore.pandalMap.title}</h1>
        <p>{t.explore.pandalMap.desc}</p>

        <button className="map-location-btn glass" onClick={useMyLocation} disabled={status === 'loading'}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
          </svg>
          {status === 'loading' ? t.mapLocating : t.mapUseLocation}
        </button>
        {status === 'denied' && <p className="map-status-error">{t.mapLocationDenied}</p>}
      </div>

      <div className="pandal-map-layout">
        <div className="pandal-map-frame glass">
          <PandalMapView
            pandals={sortedPandals}
            userLocation={userLocation}
            selectedPandal={selectedPandal}
            directionsLabel={t.mapDirections}
          />
        </div>

        <div className="pandal-list glass">
          <p className="pandal-list-heading">{userLocation ? t.mapNearbyHeading : t.mapAllHeading}</p>
          <ul>
            {sortedPandals.map((p) => (
              <li key={p.id}>
                <button
                  className={`pandal-list-item${p.id === selectedId ? ' active' : ''}`}
                  onClick={() => setSelectedId(p.id)}
                >
                  <span className="pandal-list-name">{p.name}</span>
                  <span className="pandal-list-area">
                    {p.area}, {p.district}
                  </span>
                  {userLocation && (
                    <span className="pandal-list-distance">
                      {distanceKm(userLocation, p).toFixed(1)} {t.mapKmAway}
                    </span>
                  )}
                </button>
                <a
                  className="pandal-list-directions"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.mapDirections}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="map-data-note">{t.mapDataNote}</p>
    </div>
  );
}
