import React from 'react';

export default function ReviewsHero() {
  return (
    <section className="relative w-full min-h-[48vh] flex items-end overflow-hidden">
      {/* Premium ocean gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #0B3D4A 35%, #0B8A8F 70%, #0ABBC2 100%)' }} />
      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(216,154,36,0.6) 0%, transparent 70%)', filter: 'blur(60px)', animation: 'orb-float 8s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(10,187,194,0.5) 0%, transparent 70%)', filter: 'blur(50px)', animation: 'orb-float 10s ease-in-out infinite reverse' }} />
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 pt-24 sm:pt-36 w-full">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5" style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          What Travellers Say
        </span>
        <h1 className="font-display text-3xl sm:text-hero-xl text-white font-semibold leading-tight mb-3 sm:mb-4 max-w-2xl">
          Real Stories, <span style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Real Smiles</span>
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
          Over 100 happy travellers have trusted Vibrant Holidays for their dream vacations.
        </p>
        <div className="flex items-center gap-2 mt-4 sm:mt-6 text-white/40 text-sm">
          <span>Home</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-white/70">Reviews</span>
        </div>
      </div>
    </section>
  );
}
