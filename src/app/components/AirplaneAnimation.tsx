'use client';

import React, { useEffect, useState } from 'react';

export default function AirplaneAnimation() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Skip on mobile (small screens) and when user prefers reduced motion
    const isMobile = window.innerWidth < 768;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)')?.matches;
    if (isMobile || prefersReduced) return;

    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-1/3 left-0 z-30 pointer-events-none airplane-fly"
      aria-hidden="true"
    >
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M6 24L42 8L32 24L42 40L6 24Z"
          fill="var(--accent)"
          opacity="0.85"
        />
        <path
          d="M24 24L8 28L14 24L8 20L24 24Z"
          fill="var(--accent)"
          opacity="0.5"
        />
      </svg>
      {/* Trail */}
      <div className="absolute top-1/2 right-full -translate-y-1/2 flex gap-1" style={{ marginRight: 4 }}>
        {[1, 2, 3, 4, 5]?.map((i) => (
          <div
            key={i}
            className="h-0.5 rounded-full bg-accent"
            style={{ width: 8 + i * 4, opacity: 0.3 - i * 0.04 }}
          />
        ))}
      </div>
    </div>
  );
}