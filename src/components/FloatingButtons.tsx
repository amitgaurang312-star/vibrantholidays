'use client';

import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="fixed right-5 bottom-8 z-50 flex flex-col gap-3">
      {/* Call */}
      <a
        href="tel:+918668355974"
        aria-label="Call us at +91 8668355974"
        className="flex items-center justify-center rounded-full floating-btn transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 active:scale-95"
        style={{
          width: 54,
          height: 54,
          background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)',
          boxShadow: '0 8px 24px rgba(11,138,143,0.45), 0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
        </svg>
      </a>
    </div>
  );
}