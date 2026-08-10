import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function BlogHero() {
  return (
    <section className="relative w-full min-h-[48vh] flex items-end overflow-hidden bg-foreground">
      <AppImage
        src="https://images.unsplash.com/photo-1599371428264-b3032f512459"
        alt="Aerial view of lush green mountains with misty valleys and golden morning light"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        style={{ transform: 'scale(1.03)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/45 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      <div className="absolute top-1/4 right-1/3 w-72 h-72 rounded-full opacity-12 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(10,187,194,0.5) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14 pt-24 sm:pt-36 w-full">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-xs font-semibold uppercase tracking-widest mb-4 sm:mb-5" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 12px rgba(216,154,36,0.45)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Travel Inspiration
        </span>
        <h1 className="font-display text-3xl sm:text-hero-xl text-white font-semibold leading-tight mb-3 sm:mb-4 max-w-2xl">
          Travel <span className="text-gradient-gold">Stories & Tips</span>
        </h1>
        <p className="text-white/75 text-base sm:text-lg max-w-xl leading-relaxed">
          Destination guides, packing tips, travel hacks, and stories from our happy travellers.
        </p>
        <div className="flex items-center gap-2 mt-4 sm:mt-6 text-white/40 text-sm">
          <span>Home</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          <span className="text-white/70">Blog</span>
        </div>
      </div>
    </section>
  );
}