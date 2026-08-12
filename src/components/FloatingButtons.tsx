'use client';

import React, { useState } from 'react';

export default function FloatingButtons() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="fixed right-5 bottom-8 z-50 flex flex-col gap-3">
      {/* Call */}
      <div className="relative flex items-center">
        {hovered === 'call' && (
          <span
            className="absolute right-16 text-white text-xs px-3.5 py-2 rounded-full whitespace-nowrap animate-fade-in font-medium"
            style={{ background: 'rgba(13,27,42,0.90)', backdropFilter: 'blur(12px)', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}
          >
            Call Us Now
          </span>
        )}
        <a
          href="tel:+918668355974"
          onMouseEnter={() => setHovered('call')}
          onMouseLeave={() => setHovered(null)}
          aria-label="Call us"
          className="flex items-center justify-center rounded-full floating-btn transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
          style={{
            width: 54,
            height: 54,
            background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)',
            boxShadow: '0 8px 24px rgba(11,138,143,0.45), 0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
          </svg>
        </a>
      </div>
    </div>
  );
}