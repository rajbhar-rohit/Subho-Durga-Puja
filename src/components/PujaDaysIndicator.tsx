'use client';

import { useEffect, useState } from 'react';

// Puja dates for 2026 (IST)
// Mahalaya: Oct 15, Maha Shashthi: Oct 17, Saptami: Oct 18, Ashtami: Oct 19, Navami: Oct 20, Doshami: Oct 21
const PUJA_DAYS = [
  { name: 'Mahalaya', date: new Date('2026-10-10T00:00:00+05:30'), label: 'মহালয়' }, // TODAY FOR DEMO
  { name: 'Maha Shashthi', date: new Date('2026-10-17T00:00:00+05:30'), label: 'মহা ষষ্ঠী' },
  { name: 'Maha Saptami', date: new Date('2026-10-18T00:00:00+05:30'), label: 'মহা সপ্তমী' },
  { name: 'Maha Ashtami', date: new Date('2026-10-19T00:00:00+05:30'), label: 'মহা অষ্টমী' },
  { name: 'Maha Navami', date: new Date('2026-10-20T00:00:00+05:30'), label: 'মহা নবমী' },
  { name: 'Maha Doshami', date: new Date('2026-10-21T00:00:00+05:30'), label: 'মহা দশমী' },
];

export function PujaDaysIndicator() {
  const [currentDay, setCurrentDay] = useState<typeof PUJA_DAYS[0] | null>(null);
  const [isUpcoming, setIsUpcoming] = useState(true);

  useEffect(() => {
    const updateDay = () => {
      const now = new Date();
      
      // Find current or next puja day
      for (let i = 0; i < PUJA_DAYS.length; i++) {
        const day = PUJA_DAYS[i];
        const nextDay = i < PUJA_DAYS.length - 1 ? PUJA_DAYS[i + 1] : null;
        
        // Check if today is this puja day
        if (
          now.getDate() === day.date.getDate() &&
          now.getMonth() === day.date.getMonth() &&
          now.getFullYear() === day.date.getFullYear()
        ) {
          setCurrentDay(day);
          setIsUpcoming(false);
          return;
        }
        
        // Check if this is the next upcoming day
        if (now < day.date) {
          setCurrentDay(day);
          setIsUpcoming(true);
          return;
        }
      }
      
      // If all days have passed, show the last day
      setCurrentDay(PUJA_DAYS[PUJA_DAYS.length - 1]);
      setIsUpcoming(false);
    };

    updateDay();
    // Update every hour to catch day changes
    const interval = setInterval(updateDay, 3600000);
    return () => clearInterval(interval);
  }, []);

  if (!currentDay) {
    return null;
  }

  return (
    <div
      className={`puja-days-indicator ${isUpcoming ? 'upcoming' : 'current'}`}
      title={isUpcoming ? 'Upcoming puja day' : 'Current puja day'}
    >
      <div className="indicator-dot"></div>
      <span className="indicator-label">{currentDay.name}</span>
    </div>
  );
}
