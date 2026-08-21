'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const memories = [
  {
    id: 1,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00-1783756269486.jpg',
    alt: 'Vibrant Holidays travellers enjoying a scenic destination with lush green landscapes',
  },
  {
    id: 2,
    src: '/assets/images/IMG_20240210_202100-1783756292058.jpg',
    alt: 'Travellers capturing a beautiful evening moment during a Vibrant Holidays tour',
  },
  {
    id: 3,
    src: '/assets/images/IMG_20240209_174838-1783756307427.jpg',
    alt: 'Group of happy travellers exploring a stunning location with Vibrant Holidays',
  },
  {
    id: 4,
    src: '/assets/images/IMG_20240208_152717-1783756326760.jpg',
    alt: 'Scenic travel memory from a Vibrant Holidays trip showcasing natural beauty',
  },
  {
    id: 5,
    src: '/assets/images/PHOTO-2026-05-06-13-06-36-1783756342723.jpg',
    alt: 'Memorable travel experience captured during a Vibrant Holidays adventure',
  },
  {
    id: 6,
    src: '/assets/images/IMG_20240207_101401-1783756640738.jpg',
    alt: 'Vibrant Holidays travellers enjoying a beautiful daytime destination',
  },
  {
    id: 7,
    src: '/assets/images/IMG_20240207_013249-1783756640998.jpg',
    alt: 'Night-time travel memory from a Vibrant Holidays journey',
  },
  {
    id: 8,
    src: '/assets/images/PHOTO-2026-04-11-19-59-41-1783756638340.jpg',
    alt: 'Travellers capturing a golden-hour moment during a Vibrant Holidays tour',
  },
  {
    id: 9,
    src: '/assets/images/PHOTO-2026-04-11-19-58-45-1783756638580.jpg',
    alt: 'Scenic landscape captured on a Vibrant Holidays trip',
  },
  {
    id: 10,
    src: '/assets/images/PHOTO-2026-04-11-19-56-41-1783756638394.jpg',
    alt: 'Beautiful travel moment from a Vibrant Holidays adventure',
  },
  {
    id: 11,
    src: '/assets/images/PHOTO-2026-05-30-21-50-39-1783756667695.jpg',
    alt: 'Vibrant Holidays travellers enjoying a scenic evening destination',
  },
  {
    id: 12,
    src: '/assets/images/PHOTO-2026-05-30-21-50-38-1783756667678.jpg',
    alt: 'Memorable travel snapshot from a Vibrant Holidays group tour',
  },
  {
    id: 13,
    src: '/assets/images/PHOTO-2026-04-11-20-03-39-1783756667913.jpg',
    alt: 'Stunning landscape captured during a Vibrant Holidays expedition',
  },
  {
    id: 14,
    src: '/assets/images/PHOTO-2026-06-01-23-22-01-1783756840581.jpg',
    alt: 'Vibrant Holidays travellers sharing a joyful moment at a beautiful destination',
  },
  {
    id: 15,
    src: '/assets/images/PHOTO-2026-05-30-21-52-28__1_-1783756840542.jpg',
    alt: 'Scenic travel memory from a Vibrant Holidays trip with breathtaking views',
  },
  {
    id: 16,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37__2_-1783756857742.jpg',
    alt: 'Vibrant Holidays travellers enjoying a picturesque travel destination',
  },
  {
    id: 17,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37__1_-1783756857762.jpg',
    alt: 'Beautiful travel moment captured during a Vibrant Holidays group tour',
  },
  {
    id: 18,
    src: '/assets/images/PHOTO-2026-05-25-13-35-04-1783756857989.jpg',
    alt: 'Stunning scenery from a Vibrant Holidays travel experience',
  },
  {
    id: 19,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37-1783756857818.jpg',
    alt: 'Vibrant Holidays travellers creating unforgettable memories at a scenic spot',
  },
  {
    id: 20,
    src: '/assets/images/PHOTO-2026-05-30-21-52-28-1783756857834.jpg',
    alt: 'Joyful travel memory from a Vibrant Holidays adventure tour',
  },
  {
    id: 21,
    src: '/assets/images/PHOTO-2026-06-30-17-03-44-1783756973197.jpg',
    alt: 'Vibrant Holidays travellers enjoying a beautiful destination captured on June 30',
  },
  {
    id: 22,
    src: '/assets/images/PHOTO-2026-06-30-17-03-45-1783756973358.jpg',
    alt: 'Scenic travel moment from a Vibrant Holidays trip on June 30',
  },
  {
    id: 23,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__4_-1783756972439.jpg',
    alt: 'Vibrant Holidays group exploring a stunning location on July 2',
  },
  {
    id: 24,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__2_-1783756972360.jpg',
    alt: 'Memorable travel experience captured by Vibrant Holidays on July 2',
  },
  {
    id: 25,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__1_-1783756972515.jpg',
    alt: 'Vibrant Holidays travellers at a breathtaking spot on July 2',
  },
  {
    id: 26,
    src: '/assets/images/IMG_20240209_112640-1783757325323.jpg',
    alt: 'Vibrant Holidays travellers exploring a scenic destination captured on February 9',
  },
  {
    id: 27,
    src: '/assets/images/IMG_20240209_104038-1783757331511.jpg',
    alt: 'Beautiful travel moment from a Vibrant Holidays trip on February 9',
  },
  {
    id: 29,
    src: '/assets/images/IMG_20240208_150833-1783757372416.jpg',
    alt: 'Memorable travel experience from a Vibrant Holidays tour on February 8',
  },
  {
    id: 30,
    src: '/assets/images/IMG_20240208_182859-1783757430739.jpg',
    alt: 'Beautiful travel moment captured during a Vibrant Holidays trip on February 8',
  },
  {
    id: 31,
    src: '/assets/images/IMG_20240207_112111-1783766824407.jpg',
    alt: 'Vibrant Holidays travellers enjoying a scenic beach destination on February 7',
  },
];

// Pre-computed deterministic star data to avoid SSR/client hydration mismatch
const STARS = Array.from({ length: 30 }, (_, i) => ({
  width: (((i * 17 + 7) % 20) / 10 + 1).toFixed(2),
  height: (((i * 13 + 3) % 20) / 10 + 1).toFixed(2),
  top: `${(i * 37) % 100}%`,
  left: `${(i * 53 + 11) % 100}%`,
  opacity: 0.15 + (i % 5) * 0.05,
  animationDuration: `${2 + (i % 3)}s`,
  animationDelay: `${((i * 3) % 30) / 10}s`,
}));

export default function TravelMemoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % memories.length);
        setIsTransitioning(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const goPrev = () => {
    setIsPaused(true);
    goTo((activeIndex - 1 + memories.length) % memories.length);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const goNext = () => {
    setIsPaused(true);
    goTo((activeIndex + 1) % memories.length);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const current = memories[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B3D4A 0%, #0B8A8F 30%, #0ABBC2 60%, #C8860E 85%, #D89A24 100%)' }}
    >
      {/* Starfield dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.width}px`,
              height: `${star.height}px`,
              top: star.top,
              left: star.left,
              opacity: star.opacity,
              animation: `pulse ${star.animationDuration} ease-in-out infinite`,
              animationDelay: star.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(216,154,36,0.22) 0%, rgba(10,187,194,0.18) 45%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Top decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #0ABBC2, #D89A24, #0ABBC2)' }}
      />
      {/* Bottom decorative line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, #D89A24, #0ABBC2, #D89A24)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal-up ${visible ? 'active' : ''}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.35)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300 animate-pulse" />
            Our Journeys
          </span>
          <h2 className="font-display text-section-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
            Travel{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #FDE68A 50%, #F0BC4A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Memories
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.80)' }}>
            Moments frozen in time — real trips, real smiles, real stories.
          </p>
        </div>

        {/* Phone Mockup + Side Thumbnails */}
        <div className={`reveal-scale ${visible ? 'active' : ''}`}>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

            {/* Left thumbnail column */}
            <div className="hidden lg:flex flex-col gap-3 items-center">
              {memories.slice(0, 10).map((mem, i) => (
                <button
                  key={mem.id}
                  onClick={() => { setIsPaused(true); goTo(i); setTimeout(() => setIsPaused(false), 5000); }}
                  className="relative rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none"
                  style={{
                    width: '56px',
                    height: '42px',
                    boxShadow: i === activeIndex
                      ? '0 0 0 2px #D89A24, 0 4px 16px rgba(216,154,36,0.5)'
                      : '0 0 0 1px rgba(255,255,255,0.18)',
                    opacity: i === activeIndex ? 1 : 0.5,
                    transform: i === activeIndex ? 'scale(1.1)' : 'scale(1)',
                  }}
                  aria-label={`View memory ${i + 1}`}
                >
                  <Image src={mem.src} alt={mem.alt} fill className="object-cover" sizes="56px" />
                </button>
              ))}
            </div>

            {/* Phone Frame */}
            <div className="relative flex-shrink-0" style={{ width: '280px' }}>
              {/* Phone outer shell */}
              <div
                className="relative rounded-[3rem] overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
                  padding: '12px',
                  boxShadow: '0 0 0 2px rgba(255,255,255,0.12), 0 0 0 4px rgba(0,0,0,0.6), 0 40px 80px rgba(0,0,0,0.7), 0 0 60px rgba(216,154,36,0.2), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                {/* Side buttons (decorative) */}
                <div
                  className="absolute -right-1 top-24 w-1 h-10 rounded-r-sm"
                  style={{ background: 'linear-gradient(180deg, #2a2a4a, #1a1a2e)' }}
                />
                <div
                  className="absolute -left-1 top-20 w-1 h-7 rounded-l-sm"
                  style={{ background: 'linear-gradient(180deg, #2a2a4a, #1a1a2e)' }}
                />
                <div
                  className="absolute -left-1 top-32 w-1 h-7 rounded-l-sm"
                  style={{ background: 'linear-gradient(180deg, #2a2a4a, #1a1a2e)' }}
                />

                {/* Screen bezel */}
                <div
                  className="relative rounded-[2.4rem] overflow-hidden"
                  style={{ background: '#000', aspectRatio: '9/19.5' }}
                >
                  {/* Status bar */}
                  <div
                    className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-5 pt-2 pb-1"
                    style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="text-white text-xs font-semibold" style={{ fontSize: '10px' }}>9:41</span>
                    {/* Notch */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 rounded-b-2xl"
                      style={{ width: '80px', height: '22px', background: '#000' }}
                    />
                    <div className="flex items-center gap-1">
                      {/* Signal bars */}
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="white" opacity="0.9">
                        <rect x="0" y="6" width="2" height="4" rx="0.5"/>
                        <rect x="3" y="4" width="2" height="6" rx="0.5"/>
                        <rect x="6" y="2" width="2" height="8" rx="0.5"/>
                        <rect x="9" y="0" width="2" height="10" rx="0.5"/>
                      </svg>
                      {/* Battery */}
                      <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                        <rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="white" strokeOpacity="0.8"/>
                        <rect x="15" y="3" width="2" height="4" rx="1" fill="white" fillOpacity="0.6"/>
                        <rect x="2" y="2" width="9" height="6" rx="1" fill="white" fillOpacity="0.9"/>
                      </svg>
                    </div>
                  </div>

                  {/* Photo display */}
                  <div
                    className="absolute inset-0 transition-all duration-400"
                    style={{
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'scale(1.03)' : 'scale(1)',
                      transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                      transitionDuration: '400ms',
                    }}
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      fill
                      className="object-contain"
                      sizes="280px"
                      priority={activeIndex === 0}
                    />
                  </div>

                  {/* Bottom gradient overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none"
                    style={{
                      height: '80px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                    }}
                  />

                  {/* Counter badge */}
                  <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full text-white font-bold"
                    style={{
                      background: 'rgba(0,0,0,0.55)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      fontSize: '11px',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {activeIndex + 1} / {memories.length}
                  </div>

                  {/* Tap areas for prev/next */}
                  <button
                    onClick={goPrev}
                    className="absolute left-0 top-0 bottom-0 w-1/3 z-10 focus:outline-none"
                    aria-label="Previous photo"
                  />
                  <button
                    onClick={goNext}
                    className="absolute right-0 top-0 bottom-0 w-1/3 z-10 focus:outline-none"
                    aria-label="Next photo"
                  />
                </div>

                {/* Home indicator */}
                <div className="flex justify-center pt-3 pb-1">
                  <div
                    className="rounded-full"
                    style={{ width: '100px', height: '4px', background: 'rgba(255,255,255,0.35)' }}
                  />
                </div>
              </div>

              {/* Navigation arrows below phone */}
              <div className="flex items-center justify-center gap-6 mt-6">
                <button
                  onClick={goPrev}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 focus:outline-none hover:scale-110 active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                  aria-label="Previous photo"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Dot indicators */}
                <div className="flex gap-1.5 flex-wrap justify-center" style={{ maxWidth: '140px' }}>
                  {memories.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setIsPaused(true); goTo(i); setTimeout(() => setIsPaused(false), 5000); }}
                      className="rounded-full transition-all duration-300 focus:outline-none"
                      style={{
                        width: i === activeIndex ? '16px' : '6px',
                        height: '6px',
                        background: i === activeIndex ? '#D89A24' : 'rgba(255,255,255,0.35)',
                      }}
                      aria-label={`Go to memory ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={goNext}
                  className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 focus:outline-none hover:scale-110 active:scale-95"
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    backdropFilter: 'blur(8px)',
                  }}
                  aria-label="Next photo"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3L11 8L6 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Right thumbnail column */}
            <div className="hidden lg:flex flex-col gap-3 items-center">
              {memories.slice(10, 20).map((mem, i) => {
                const idx = i + 10;
                return (
                  <button
                    key={mem.id}
                    onClick={() => { setIsPaused(true); goTo(idx); setTimeout(() => setIsPaused(false), 5000); }}
                    className="relative rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none"
                    style={{
                      width: '56px',
                      height: '42px',
                      boxShadow: idx === activeIndex
                        ? '0 0 0 2px #D89A24, 0 4px 16px rgba(216,154,36,0.5)'
                        : '0 0 0 1px rgba(255,255,255,0.18)',
                      opacity: idx === activeIndex ? 1 : 0.5,
                      transform: idx === activeIndex ? 'scale(1.1)' : 'scale(1)',
                    }}
                    aria-label={`View memory ${idx + 1}`}
                  >
                    <Image src={mem.src} alt={mem.alt} fill className="object-cover" sizes="56px" />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom thumbnail row for remaining photos (21-30) — desktop only */}
          <div className="hidden lg:flex justify-center gap-3 mt-8">
            {memories.slice(20).map((mem, i) => {
              const idx = i + 20;
              return (
                <button
                  key={mem.id}
                  onClick={() => { setIsPaused(true); goTo(idx); setTimeout(() => setIsPaused(false), 5000); }}
                  className="relative rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none"
                  style={{
                    width: '56px',
                    height: '42px',
                    boxShadow: idx === activeIndex
                      ? '0 0 0 2px #D89A24, 0 4px 16px rgba(216,154,36,0.5)'
                      : '0 0 0 1px rgba(255,255,255,0.18)',
                    opacity: idx === activeIndex ? 1 : 0.5,
                    transform: idx === activeIndex ? 'scale(1.1)' : 'scale(1)',
                  }}
                  aria-label={`View memory ${idx + 1}`}
                >
                  <Image src={mem.src} alt={mem.alt} fill className="object-cover" sizes="56px" />
                </button>
              );
            })}
          </div>

          {/* Mobile thumbnail strip */}
          <div className="flex lg:hidden gap-2 mt-6 overflow-x-auto pb-2 justify-start px-2" style={{ scrollbarWidth: 'none' }}>
            {memories.map((mem, i) => (
              <button
                key={mem.id}
                onClick={() => { setIsPaused(true); goTo(i); setTimeout(() => setIsPaused(false), 5000); }}
                className="relative rounded-lg overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none"
                style={{
                  width: '48px',
                  height: '36px',
                  boxShadow: i === activeIndex
                    ? '0 0 0 2px #D89A24' :'0 0 0 1px rgba(255,255,255,0.18)',
                  opacity: i === activeIndex ? 1 : 0.5,
                }}
                aria-label={`View memory ${i + 1}`}
              >
                <Image src={mem.src} alt={mem.alt} fill className="object-cover" sizes="48px" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
