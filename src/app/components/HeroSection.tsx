'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const heroSlides = [
{
  src: "https://images.unsplash.com/photo-1459735676691-2c21eea54445",
  alt: 'Snow-capped mountains of Kashmir under a clear blue sky, dramatic alpine landscape with pristine white peaks',
  label: 'Kashmir',
  tagline: 'Paradise on Earth',
  country: 'India'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_16a8f9e8f-1772369782420.png",
  alt: 'Kerala backwaters at sunset with traditional wooden houseboat gliding through calm golden waters',
  label: 'Kerala',
  tagline: "God\'s Own Country",
  country: 'India'
},
{
  src: "https://images.unsplash.com/photo-1630210414374-70a0439e286c",
  alt: 'Dubai skyline at night with Burj Khalifa illuminated against a deep blue sky with city lights reflecting',
  label: 'Dubai',
  tagline: 'City of Wonders',
  country: 'UAE'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bdd8d273-1772161175574.png",
  alt: 'Bali rice terraces in bright green lush tropical landscape with traditional Balinese temple gate at golden hour',
  label: 'Bali',
  tagline: 'Island of the Gods',
  country: 'Indonesia'
},
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_168834851-1767719552012.png",
  alt: 'Maldives overwater bungalows on crystal clear turquoise lagoon with white sand and tropical palm trees',
  label: 'Maldives',
  tagline: 'Heaven on Water',
  country: 'Maldives'
}];


const subheadingItems = [
'Customized Holidays',
'Fixed Departures',
'Honeymoon Packages',
'Family Tours',
'Visa Assistance'];


export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    const subTimer = setInterval(() => {
      setSubIdx((prev) => (prev + 1) % subheadingItems.length);
    }, 2500);
    return () => clearInterval(subTimer);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-foreground" aria-label="Hero">
      {/* Slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={slide.label}
          className="absolute inset-0 transition-opacity"
          style={{ opacity: i === currentSlide ? 1 : 0, transitionDuration: '1800ms' }}
        >
          <AppImage
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
            quality={i === 0 ? 80 : 65}
            className="object-cover object-center"
            style={{ transform: i === currentSlide ? 'scale(1.06)' : 'scale(1)', transition: 'transform 5500ms ease-out' }}
          />
          {/* Multi-layer scrims for depth */}
          <div className="absolute inset-0 hero-scrim" />
          <div className="absolute inset-0 hero-scrim-side" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.4) 0%, transparent 30%)' }} />
        </div>
      ))}

      {/* Floating ambient particles — hidden on mobile to save GPU */}
      <div className="absolute inset-0 pointer-events-none z-5 hidden sm:block">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(10,187,194,0.6) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'orb-float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 rounded-full opacity-8" style={{ background: 'radial-gradient(circle, rgba(216,154,36,0.5) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'orb-float 10s ease-in-out infinite reverse' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-16 pt-32 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto w-full">

        {/* Headline */}
        <h1 className={`font-display text-hero-xl text-white font-semibold leading-tight mb-5 max-w-4xl opacity-0 ${loaded ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Explore the World with{' '}
          <span className="text-gradient-gold">Vibrant Holidays</span>
        </h1>

        {/* Rotating subheading */}
        <div className={`mb-9 h-8 overflow-hidden opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
          <p className="text-white/75 text-lg font-medium flex items-center gap-3">
            <span className="w-6 h-px bg-gradient-to-r from-accent to-transparent" />
            <span
              key={subIdx}
              className="animate-fade-in-up"
              style={{ display: 'inline-block' }}
            >
              {subheadingItems[subIdx]}
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-6 opacity-0 ${loaded ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          <Link
            href="/tour-packages"
            className="flex items-center justify-center gap-2.5 text-white px-9 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:-translate-y-1 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #C8860E 0%, #D89A24 50%, #F0BC4A 100%)', boxShadow: '0 8px 32px rgba(216,154,36,0.45), 0 2px 8px rgba(0,0,0,0.2)' }}
          >
            Book Your Trip
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
          <Link
            href="/#destinations"
            className="flex items-center justify-center gap-2.5 glass-panel text-white px-9 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/15 hover:-translate-y-0.5"
          >
            Explore Destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>

        {/* Location pill */}
        <div className={`mb-14 opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <span className="glass-panel text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2.5 w-fit" style={{ border: '1px solid rgba(216,154,36,0.35)' }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/70 text-xs uppercase tracking-widest">{heroSlides[currentSlide].country}</span>
            <span className="w-px h-3 bg-white/20" />
            {heroSlides[currentSlide].tagline}
          </span>
        </div>

        {/* Slide indicators */}
        <div className={`flex items-center gap-3 opacity-0 ${loaded ? 'animate-fade-in' : ''}`} style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
          {heroSlides.map((slide, i) => (
            <button
              key={slide.label}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Go to slide ${slide.label}`}
              className="transition-all duration-400 group"
            >
              <span
                className="block h-1 rounded-full transition-all duration-500"
                style={{
                  width: i === currentSlide ? 36 : 8,
                  background: i === currentSlide
                    ? 'linear-gradient(90deg, #D89A24, #F0BC4A)'
                    : 'rgba(255,255,255,0.35)',
                  boxShadow: i === currentSlide ? '0 0 8px rgba(216,154,36,0.6)' : 'none',
                }}
              />
            </button>
          ))}
          <span className="ml-3 text-white/50 text-xs font-medium uppercase tracking-widest">
            {heroSlides[currentSlide].label}
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-10 z-10 hidden sm:flex flex-col items-center gap-2">
        <span className="text-white/35 text-xs uppercase tracking-widest font-medium" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="scroll-indicator">
          <svg className="w-4 h-4 text-white/35" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-8 left-10 z-10 hidden sm:flex items-center gap-2">
        <span className="text-white/35 text-xs font-medium tabular-nums">
          {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}