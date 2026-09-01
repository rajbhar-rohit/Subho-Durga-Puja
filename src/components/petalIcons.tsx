// Small decorative flower shapes for the Flower Shower effect.
// Hibiscus (joba) and kash ful (autumn grass plume) have no good emoji
// equivalent, so they're hand-drawn here; the rest use emoji for variety.

export function HibiscusIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {[0, 72, 144, 216, 288].map((deg) => (
        <ellipse
          key={deg}
          cx="12"
          cy="6.6"
          rx="3.1"
          ry="5.4"
          fill="#e2452e"
          opacity={0.94}
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
      <circle cx="12" cy="12" r="1.7" fill="#8a1a12" />
      <circle cx="12" cy="12" r="0.8" fill="#f3d98b" />
      <line x1="12" y1="12" x2="12" y2="17.2" stroke="#f3d98b" strokeWidth="0.9" />
      <circle cx="12" cy="17.6" r="0.9" fill="#f3d98b" />
    </svg>
  );
}

export function KashFulIcon({ size }: { size: number }) {
  const width = size * 0.72;
  const height = size * 1.35;
  return (
    <svg width={width} height={height} viewBox="0 0 20 30" aria-hidden="true">
      <path d="M10 30 L10 13" stroke="#c9b48c" strokeWidth="1.1" fill="none" />
      <ellipse cx="10" cy="9.5" rx="3.2" ry="9" fill="#fbf6ea" opacity={0.6} />
      <ellipse cx="7.3" cy="10.5" rx="2.4" ry="7.4" fill="#fbf6ea" opacity={0.5} transform="rotate(-20 7.3 10.5)" />
      <ellipse cx="12.7" cy="10.5" rx="2.4" ry="7.4" fill="#fbf6ea" opacity={0.5} transform="rotate(20 12.7 10.5)" />
      <ellipse cx="5.8" cy="13.5" rx="2" ry="5.8" fill="#fbf6ea" opacity={0.42} transform="rotate(-34 5.8 13.5)" />
      <ellipse cx="14.2" cy="13.5" rx="2" ry="5.8" fill="#fbf6ea" opacity={0.42} transform="rotate(34 14.2 13.5)" />
    </svg>
  );
}
