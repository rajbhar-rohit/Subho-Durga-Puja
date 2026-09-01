'use client';

import { useEffect, useRef, useState } from 'react';
import { useFlowerShower } from '@/context/FlowerShowerContext';
import { HibiscusIcon, KashFulIcon } from './petalIcons';

type PetalKind = 'hibiscus' | 'kashful' | 'shiuli' | 'marigold' | 'blossom';

interface Petal {
  id: number;
  left: number;
  duration: number;
  sway: number;
  size: number;
  kind: PetalKind;
}

// Real Durga Puja botanicals: joba (hibiscus) for the Devi's worship, kash
// ful (the white autumn grass that blooms right as the season turns),
// shiuli, marigold, and a generic blossom for extra variety.
const PETAL_KINDS: PetalKind[] = ['hibiscus', 'kashful', 'shiuli', 'marigold', 'blossom'];

const EMOJI_BY_KIND: Partial<Record<PetalKind, string>> = {
  shiuli: '💮',
  marigold: '🌼',
  blossom: '🌸',
};

function PetalContent({ kind, size }: { kind: PetalKind; size: number }) {
  if (kind === 'hibiscus') return <HibiscusIcon size={size} />;
  if (kind === 'kashful') return <KashFulIcon size={size} />;
  return <span style={{ fontSize: size }}>{EMOJI_BY_KIND[kind]}</span>;
}

export function FlowerShower() {
  const { trigger } = useFlowerShower();
  const [petals, setPetals] = useState<Petal[]>([]);
  const idRef = useRef(0);
  const reduceMotionRef = useRef(false);

  useEffect(() => {
    reduceMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  useEffect(() => {
    if (trigger === 0) return;

    function spawnPetal() {
      const id = idRef.current++;
      const petal: Petal = {
        id,
        left: Math.random() * 100,
        duration: 4 + Math.random() * 3,
        sway: Math.random() * 140 - 70,
        size: 16 + Math.random() * 16,
        kind: PETAL_KINDS[Math.floor(Math.random() * PETAL_KINDS.length)],
      };
      setPetals((prev) => [...prev, petal]);
      setTimeout(() => {
        setPetals((prev) => prev.filter((p) => p.id !== id));
      }, petal.duration * 1000 + 200);
    }

    const count = reduceMotionRef.current ? 10 : 42;
    const timers: ReturnType<typeof setTimeout>[] = [];
    for (let i = 0; i < count; i++) {
      timers.push(setTimeout(spawnPetal, i * (reduceMotionRef.current ? 15 : 45)));
    }
    return () => timers.forEach(clearTimeout);
  }, [trigger]);

  return (
    <div className="petal-layer" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}vw`,
            animationDuration: `${p.duration}s`,
            ['--sway' as unknown as string]: `${p.sway}px`,
          }}
        >
          <PetalContent kind={p.kind} size={p.size} />
        </span>
      ))}
    </div>
  );
}
