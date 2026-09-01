'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Maha Shashthi 2026, IST. Panjika/panchang sources vary by a day between
// Oct 16 and Oct 17 — adjust here if your local calendar differs.
const TARGET_DATE = new Date('2026-10-17T00:00:00+05:30');

function getTimeParts(target: Date) {
  const diffMs = target.getTime() - Date.now();
  const isLive = diffMs <= 0;
  const totalSeconds = Math.floor(Math.max(0, diffMs) / 1000);
  return {
    isLive,
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function CountdownTimer() {
  const { t } = useLanguage();
  // Start from a fixed zeroed state so server and client render the same
  // markup on first paint; the real countdown kicks in after mount.
  const [parts, setParts] = useState({ isLive: false, days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setParts(getTimeParts(TARGET_DATE));
    const id = setInterval(() => setParts(getTimeParts(TARGET_DATE)), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { value: number; label: string }[] = [
    { value: parts.days, label: t.countdownDays },
    { value: parts.hours, label: t.countdownHours },
    { value: parts.minutes, label: t.countdownMinutes },
    { value: parts.seconds, label: t.countdownSeconds },
  ];

  return (
    <div id="puja-days" className="countdown-card glass">
      <p className="countdown-title">{t.countdownTitle}</p>
      <p className="countdown-subtitle">{mounted && parts.isLive ? t.countdownLive : t.countdownSubtitle}</p>
      <div className="countdown-grid">
        {units.map((u) => (
          <div className="countdown-unit glass" key={u.label}>
            <span className="countdown-value">{String(u.value).padStart(2, '0')}</span>
            <span className="countdown-label">{u.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
