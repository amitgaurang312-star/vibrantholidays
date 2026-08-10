'use client';

import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}

const stats: StatItem[] = [
  {
    value: 5,
    suffix: '★',
    label: 'Rated by Happy Travellers',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    color: '#D89A24',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Happy Customers',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: '#0B8A8F',
  },
  {
    value: 50,
    suffix: '+',
    label: 'Destinations Covered',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    color: '#0ABBC2',
  },
  {
    value: 24,
    suffix: '×7',
    label: 'Support Available',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: '#0B8A8F',
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame = 0;
    const totalFrames = 70;
    const increment = target / totalFrames;
    const timer = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round(increment * frame), target));
      if (frame >= totalFrames) clearInterval(timer);
    }, 22);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function TrustSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-14 sm:py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)' }}>
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Headline */}
        <div className={`text-center mb-8 sm:mb-12 reveal-up ${visible ? 'active' : ''}`}>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 sm:w-5 h-4 sm:h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <p className="text-muted-foreground text-sm font-semibold uppercase tracking-widest">Trusted by Families Across India</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6 mb-8 sm:mb-12">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`reveal-scale ${visible ? 'active' : ''} group relative bg-white rounded-2xl p-4 sm:p-6 border border-border/60 card-hover text-center overflow-hidden`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: '0 2px 16px rgba(13,27,42,0.05)',
              }}
            >
              {/* Hover background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" style={{ background: `linear-gradient(135deg, ${stat.color}08, ${stat.color}04)` }} />

              <div className="relative z-10">
                <div
                  className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 mx-auto transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: `${stat.color}15`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <div
                  className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-1.5 transition-all duration-300"
                  style={{ color: stat.color }}
                >
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm leading-snug">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Badges row */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '400ms' }}>
          {['Personalized Itineraries', 'Best Price Guarantee', 'Visa Assistance', 'Flight Booking'].map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm text-muted-foreground font-medium transition-all duration-300 hover:border-primary hover:text-primary hover:-translate-y-0.5 cursor-default"
              style={{ background: 'white', border: '1px solid rgba(11,138,143,0.15)', boxShadow: '0 2px 8px rgba(13,27,42,0.04)' }}
            >
              <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}