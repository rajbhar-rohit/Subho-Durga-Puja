'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Pandal } from '@/lib/pandals';

// Custom teardrop pins in the site's palette instead of Leaflet's default
// blue marker (which also avoids the classic broken-default-icon-path
// issue bundlers have with Leaflet's marker images).
function pinIcon(color: string, size = 30) {
  return L.divIcon({
    className: 'pandal-pin',
    html: `<svg width="${size}" height="${size}" viewBox="0 0 24 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.4 0 0 5.4 0 12c0 9 12 20 12 20s12-11 12-20c0-6.6-5.4-12-12-12Z" fill="${color}" stroke="#f3d98b" stroke-width="1"/>
      <circle cx="12" cy="12" r="4.4" fill="#170303"/>
    </svg>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
}

const PANDAL_ICON = pinIcon('#c1272d');
const USER_ICON = L.divIcon({
  className: 'user-pin',
  html: `<span class="user-pin-dot"></span>`,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

/** Fits the map to show every pandal, and the user's location if known. */
function FitBounds({ pandals, userLocation }: { pandals: Pandal[]; userLocation: { lat: number; lng: number } | null }) {
  const map = useMap();
  const didFitRef = useRef(false);

  useEffect(() => {
    if (didFitRef.current && !userLocation) return;
    const points: [number, number][] = pandals.map((p) => [p.lat, p.lng]);
    if (userLocation) points.push([userLocation.lat, userLocation.lng]);
    if (points.length === 0) return;
    map.fitBounds(L.latLngBounds(points), { padding: [40, 40], maxZoom: 13 });
    didFitRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLocation]);

  return null;
}

/** Flies to whichever pandal is selected from the list. */
function FlyToSelected({ pandal }: { pandal: Pandal | null }) {
  const map = useMap();
  useEffect(() => {
    if (pandal) map.flyTo([pandal.lat, pandal.lng], 14, { duration: 0.8 });
  }, [pandal, map]);
  return null;
}

interface PandalMapViewProps {
  pandals: Pandal[];
  userLocation: { lat: number; lng: number } | null;
  selectedPandal: Pandal | null;
  directionsLabel: string;
}

export default function PandalMapView({ pandals, userLocation, selectedPandal, directionsLabel }: PandalMapViewProps) {
  return (
    <MapContainer center={[22.5726, 88.3639]} zoom={7} scrollWheelZoom className="pandal-map-canvas">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds pandals={pandals} userLocation={userLocation} />
      <FlyToSelected pandal={selectedPandal} />

      {userLocation && (
        <Marker position={[userLocation.lat, userLocation.lng]} icon={USER_ICON} />
      )}

      {pandals.map((p) => (
        <Marker key={p.id} position={[p.lat, p.lng]} icon={PANDAL_ICON}>
          <Popup>
            <strong>{p.name}</strong>
            <br />
            {p.area}, {p.district}
            {p.description && (
              <>
                <br />
                <small>{p.description}</small>
              </>
            )}
            <br />
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${p.lat},${p.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {directionsLabel}
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
