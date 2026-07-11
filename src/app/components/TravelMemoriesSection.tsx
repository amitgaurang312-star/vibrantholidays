'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const memories = [
  {
    id: 1,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00-1783756269486.jpg',
    alt: 'Vibrant Holidays travellers enjoying a scenic destination with lush green landscapes',
    quote: 'The world is a book, and those who do not travel read only one page.',
    author: '— Saint Augustine',
    position: 'bottom-left',
  },
  {
    id: 2,
    src: '/assets/images/IMG_20240210_202100-1783756292058.jpg',
    alt: 'Travellers capturing a beautiful evening moment during a Vibrant Holidays tour',
    quote: 'Travel far enough, you meet yourself.',
    author: '— David Mitchell',
    position: 'top-right',
  },
  {
    id: 3,
    src: '/assets/images/IMG_20240209_174838-1783756307427.jpg',
    alt: 'Group of happy travellers exploring a stunning location with Vibrant Holidays',
    quote: 'Not all those who wander are lost.',
    author: '— J.R.R. Tolkien',
    position: 'bottom-right',
  },
  {
    id: 4,
    src: '/assets/images/IMG_20240208_152717-1783756326760.jpg',
    alt: 'Scenic travel memory from a Vibrant Holidays trip showcasing natural beauty',
    quote: 'Life is short and the world is wide.',
    author: '— Simon Raven',
    position: 'top-left',
  },
  {
    id: 5,
    src: '/assets/images/PHOTO-2026-05-06-13-06-36-1783756342723.jpg',
    alt: 'Memorable travel experience captured during a Vibrant Holidays adventure',
    quote: 'To travel is to live.',
    author: '— Hans Christian Andersen',
    position: 'bottom-left',
  },
  {
    id: 6,
    src: '/assets/images/IMG_20240207_101401-1783756640738.jpg',
    alt: 'Vibrant Holidays travellers enjoying a beautiful daytime destination',
    quote: 'Jobs fill your pocket, but adventures fill your soul.',
    author: '— Jaime Lyn',
    position: 'bottom-left',
  },
  {
    id: 7,
    src: '/assets/images/IMG_20240207_013249-1783756640998.jpg',
    alt: 'Night-time travel memory from a Vibrant Holidays journey',
    quote: 'Travel makes one modest. You see what a tiny place you occupy in the world.',
    author: '— Gustave Flaubert',
    position: 'top-right',
  },
  {
    id: 8,
    src: '/assets/images/PHOTO-2026-04-11-19-59-41-1783756638340.jpg',
    alt: 'Travellers capturing a golden-hour moment during a Vibrant Holidays tour',
    quote: 'The journey of a thousand miles begins with a single step.',
    author: '— Lao Tzu',
    position: 'bottom-right',
  },
  {
    id: 9,
    src: '/assets/images/PHOTO-2026-04-11-19-58-45-1783756638580.jpg',
    alt: 'Scenic landscape captured on a Vibrant Holidays trip',
    quote: 'We travel not to escape life, but for life not to escape us.',
    author: '— Anonymous',
    position: 'top-left',
  },
  {
    id: 10,
    src: '/assets/images/PHOTO-2026-04-11-19-56-41-1783756638394.jpg',
    alt: 'Beautiful travel moment from a Vibrant Holidays adventure',
    quote: 'Wherever you go, go with all your heart.',
    author: '— Confucius',
    position: 'bottom-left',
  },
  {
    id: 11,
    src: '/assets/images/PHOTO-2026-05-30-21-50-39-1783756667695.jpg',
    alt: 'Vibrant Holidays travellers enjoying a scenic evening destination',
    quote: 'Once a year, go someplace you have never been before.',
    author: '— Dalai Lama',
    position: 'top-right',
  },
  {
    id: 12,
    src: '/assets/images/PHOTO-2026-05-30-21-50-38-1783756667678.jpg',
    alt: 'Memorable travel snapshot from a Vibrant Holidays group tour',
    quote: 'Travel is the only thing you buy that makes you richer.',
    author: '— Anonymous',
    position: 'bottom-right',
  },
  {
    id: 13,
    src: '/assets/images/PHOTO-2026-04-11-20-03-39-1783756667913.jpg',
    alt: 'Stunning landscape captured during a Vibrant Holidays expedition',
    quote: 'The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.',
    author: '— Marcel Proust',
    position: 'top-left',
  },
  {
    id: 14,
    src: '/assets/images/PHOTO-2026-06-01-23-22-01-1783756840581.jpg',
    alt: 'Vibrant Holidays travellers sharing a joyful moment at a beautiful destination',
    quote: 'Adventure is worthwhile in itself.',
    author: '— Amelia Earhart',
    position: 'bottom-left',
  },
  {
    id: 15,
    src: '/assets/images/PHOTO-2026-05-30-21-52-28__1_-1783756840542.jpg',
    alt: 'Scenic travel memory from a Vibrant Holidays trip with breathtaking views',
    quote: 'Collect moments, not things.',
    author: '— Anonymous',
    position: 'top-right',
  },
  {
    id: 16,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37__2_-1783756857742.jpg',
    alt: 'Vibrant Holidays travellers enjoying a picturesque travel destination',
    quote: 'Travel is the healthiest addiction.',
    author: '— Anonymous',
    position: 'bottom-left',
  },
  {
    id: 17,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37__1_-1783756857762.jpg',
    alt: 'Beautiful travel moment captured during a Vibrant Holidays group tour',
    quote: 'The world is yours to explore.',
    author: '— Anonymous',
    position: 'top-right',
  },
  {
    id: 18,
    src: '/assets/images/PHOTO-2026-05-25-13-35-04-1783756857989.jpg',
    alt: 'Stunning scenery from a Vibrant Holidays travel experience',
    quote: 'Every journey begins with a single step.',
    author: '— Anonymous',
    position: 'bottom-right',
  },
  {
    id: 19,
    src: '/assets/images/PHOTO-2026-05-30-21-50-37-1783756857818.jpg',
    alt: 'Vibrant Holidays travellers creating unforgettable memories at a scenic spot',
    quote: 'Go where you feel most alive.',
    author: '— Anonymous',
    position: 'top-left',
  },
  {
    id: 20,
    src: '/assets/images/PHOTO-2026-05-30-21-52-28-1783756857834.jpg',
    alt: 'Joyful travel memory from a Vibrant Holidays adventure tour',
    quote: 'Blessed are the curious, for they shall have adventures.',
    author: '— Lovelle Drachman',
    position: 'bottom-left',
  },
  {
    id: 21,
    src: '/assets/images/PHOTO-2026-06-30-17-03-44-1783756973197.jpg',
    alt: 'Vibrant Holidays travellers enjoying a beautiful destination captured on June 30',
    quote: 'Travel makes one modest. You see what a tiny place you occupy in the world.',
    author: '— Gustave Flaubert',
    position: 'top-right',
  },
  {
    id: 22,
    src: '/assets/images/PHOTO-2026-06-30-17-03-45-1783756973358.jpg',
    alt: 'Scenic travel moment from a Vibrant Holidays trip on June 30',
    quote: 'Life is short and the world is wide.',
    author: '— Simon Raven',
    position: 'bottom-left',
  },
  {
    id: 23,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__4_-1783756972439.jpg',
    alt: 'Vibrant Holidays group exploring a stunning location on July 2',
    quote: 'To travel is to live.',
    author: '— Hans Christian Andersen',
    position: 'top-left',
  },
  {
    id: 24,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__2_-1783756972360.jpg',
    alt: 'Memorable travel experience captured by Vibrant Holidays on July 2',
    quote: 'Not all those who wander are lost.',
    author: '— J.R.R. Tolkien',
    position: 'bottom-right',
  },
  {
    id: 25,
    src: '/assets/images/PHOTO-2026-07-02-12-05-00__1_-1783756972515.jpg',
    alt: 'Vibrant Holidays travellers at a breathtaking spot on July 2',
    quote: 'Adventure is worthwhile in itself.',
    author: '— Amelia Earhart',
    position: 'top-right',
  },
  {
    id: 26,
    src: '/assets/images/IMG_20240209_112640-1783757325323.jpg',
    alt: 'Vibrant Holidays travellers exploring a scenic destination captured on February 9',
    quote: 'The best journeys answer questions that in the beginning you didn\'t even think to ask.',
    author: '— Jeff Johnson',
    position: 'bottom-left',
  },
  {
    id: 27,
    src: '/assets/images/IMG_20240209_104038-1783757331511.jpg',
    alt: 'Beautiful travel moment from a Vibrant Holidays trip on February 9',
    quote: 'Travel is the only thing you buy that makes you richer.',
    author: '— Anonymous',
    position: 'top-right',
  },
  {
    id: 28,
    src: '/assets/images/PHOTO-2026-05-30-21-52-28__1_-1783757371318.jpg',
    alt: 'Stunning scenery captured during a Vibrant Holidays adventure on May 30',
    quote: 'Wherever you go becomes a part of you somehow.',
    author: '— Anita Desai',
    position: 'bottom-right',
  },
  {
    id: 29,
    src: '/assets/images/IMG_20240208_150833-1783757372416.jpg',
    alt: 'Memorable travel experience from a Vibrant Holidays tour on February 8',
    quote: 'A journey is best measured in friends, rather than miles.',
    author: '— Tim Cahill',
    position: 'top-left',
  },
  {
    id: 30,
    src: '/assets/images/IMG_20240208_182859-1783757430739.jpg',
    alt: 'Beautiful travel moment captured during a Vibrant Holidays trip on February 8',
    quote: 'The world is a book, and those who do not travel read only one page.',
    author: '— Saint Augustine',
    position: 'bottom-right',
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % memories.length);
        setIsTransitioning(false);
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index: number) => {
    if (index === activeIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 400);
  };

  const current = memories[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0b2a3a 50%, #0d1b2a 100%)' }}
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(11,138,143,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal-up ${visible ? 'active' : ''}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ background: 'rgba(11,138,143,0.15)', color: '#0ABBC2', border: '1px solid rgba(11,138,143,0.30)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Our Journeys
          </span>
          <h2 className="font-display text-section-xl font-semibold mb-4" style={{ color: '#ffffff' }}>
            Travel{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #0ABBC2 0%, #D89A24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Memories
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Moments frozen in time — real trips, real smiles, real stories.
          </p>
        </div>

        {/* Cinematic Viewer */}
        <div className={`reveal-scale ${visible ? 'active' : ''}`}>
          <div className="relative mx-auto" style={{ maxWidth: '900px' }}>
            {/* Main image frame */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                aspectRatio: '16/9',
                boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'scale(1.04)' : 'scale(1)',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <Image
                  src={current.src}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 900px"
                  priority={activeIndex === 0}
                />
              </div>

              {/* Cinematic gradient overlays */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.10) 60%, rgba(0,0,0,0.35) 100%)',
                }}
              />

              {/* Film grain texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.4\'/%3E%3C/svg%3E")',
                  backgroundSize: '200px 200px',
                  mixBlendMode: 'overlay',
                }}
              />

              {/* Corner film marks */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/30 rounded-tl-sm pointer-events-none" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-white/30 rounded-tr-sm pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-white/30 rounded-bl-sm pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/30 rounded-br-sm pointer-events-none" />

              {/* Quote overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-all duration-700"
                style={{
                  opacity: isTransitioning ? 0 : 1,
                  transform: isTransitioning ? 'translateY(12px)' : 'translateY(0)',
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                  transitionDelay: isTransitioning ? '0ms' : '200ms',
                }}
              >
                {/* Quote mark */}
                <div className="mb-2">
                  <svg className="w-8 h-8 opacity-60" style={{ color: '#0ABBC2' }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p
                  className="text-white font-semibold text-lg sm:text-2xl leading-snug mb-2"
                  style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}
                >
                  {current.quote}
                </p>
                <p className="text-sm font-medium" style={{ color: '#0ABBC2', letterSpacing: '0.05em' }}>
                  {current.author}
                </p>
              </div>

              {/* Image counter badge */}
              <div
                className="absolute top-5 right-5 px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: 'rgba(0,0,0,0.50)',
                  color: 'rgba(255,255,255,0.80)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  letterSpacing: '0.08em',
                }}
              >
                {activeIndex + 1} / {memories.length}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="flex items-center justify-center gap-3 mt-6">
              {memories.map((mem, i) => (
                <button
                  key={mem.id}
                  onClick={() => goTo(i)}
                  className="relative rounded-xl overflow-hidden flex-shrink-0 transition-all duration-300 focus:outline-none"
                  style={{
                    width: i === activeIndex ? '72px' : '52px',
                    height: i === activeIndex ? '52px' : '38px',
                    boxShadow:
                      i === activeIndex
                        ? '0 0 0 2px #0ABBC2, 0 8px 24px rgba(10,187,194,0.35)'
                        : '0 0 0 1px rgba(255,255,255,0.12)',
                    opacity: i === activeIndex ? 1 : 0.55,
                    transform: i === activeIndex ? 'scale(1)' : 'scale(0.95)',
                  }}
                  aria-label={`View memory ${i + 1}`}
                >
                  <Image
                    src={mem.src}
                    alt={mem.alt}
                    fill
                    className="object-cover"
                    sizes="72px"
                  />
                  {i === activeIndex && (
                    <div
                      className="absolute inset-0"
                      style={{ background: 'rgba(10,187,194,0.15)' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-5 flex gap-1.5 justify-center">
              {memories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-0.5 rounded-full transition-all duration-500 focus:outline-none"
                  style={{
                    width: i === activeIndex ? '32px' : '12px',
                    background: i === activeIndex ? '#0ABBC2' : 'rgba(255,255,255,0.20)',
                  }}
                  aria-label={`Go to memory ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
