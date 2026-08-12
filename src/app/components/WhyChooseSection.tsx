'use client';

import React, { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: 'Customized Holidays',
    desc: 'Every itinerary is crafted uniquely for you — your dates, your budget, your dream.',
    gradient: 'from-[#0B8A8F]/12 to-[#0ABBC2]/8',
    iconBg: 'rgba(11,138,143,0.12)',
    iconColor: '#0B8A8F',
    accentLine: '#0B8A8F',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Family Specialists',
    desc: 'Kid-friendly itineraries with activities, stays, and meals the whole family will love.',
    gradient: 'from-[#D89A24]/12 to-[#F0BC4A]/8',
    iconBg: 'rgba(216,154,36,0.12)',
    iconColor: '#D89A24',
    accentLine: '#D89A24',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden charges. What you see is exactly what you pay — guaranteed.',
    gradient: 'from-emerald-500/10 to-green-400/6',
    iconBg: 'rgba(16,185,129,0.12)',
    iconColor: '#059669',
    accentLine: '#059669',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    title: 'Flight Assistance',
    desc: 'Best airfare deals sourced and booked for you. Domestic and international flights.',
    gradient: 'from-sky-500/10 to-blue-400/6',
    iconBg: 'rgba(14,165,233,0.12)',
    iconColor: '#0284C7',
    accentLine: '#0284C7',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Best Hotels',
    desc: 'Handpicked 3★–5★ properties with verified reviews and prime locations.',
    gradient: 'from-violet-500/10 to-purple-400/6',
    iconBg: 'rgba(139,92,246,0.12)',
    iconColor: '#7C3AED',
    accentLine: '#7C3AED',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Dedicated Trip Support',
    desc: '24×7 phone support throughout your journey. We\'re with you every step.',
    gradient: 'from-rose-500/10 to-pink-400/6',
    iconBg: 'rgba(244,63,94,0.12)',
    iconColor: '#E11D48',
    accentLine: '#E11D48',
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 orb orb-teal opacity-20 pointer-events-none" style={{ animation: 'orb-float 10s ease-in-out infinite' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 reveal-up ${visible ? 'active' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Why Vibrant Holidays
          </span>
          <h2 className="font-display text-section-xl text-foreground font-semibold mb-5">
            Travel Smarter, <span className="text-gradient-teal">Live Better</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We go beyond booking — we craft experiences that become lifelong memories.
          </p>
        </div>

        {/* Feature Cards — Bento-style with varied visual treatment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features?.map((feat, i) => (
            <div
              key={feat?.title}
              className={`reveal-scale ${visible ? 'active' : ''} group relative bg-white rounded-2xl p-7 border border-border/60 card-hover cursor-default overflow-hidden`}
              style={{
                transitionDelay: `${i * 80}ms`,
                boxShadow: '0 2px 16px rgba(13,27,42,0.05)',
              }}
            >
              {/* Hover gradient fill */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feat?.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${feat?.accentLine}, transparent)` }}
              />

              <div className="relative z-10">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-400 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: feat?.iconBg, color: feat?.iconColor }}
                >
                  {feat?.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2.5 group-hover:text-primary transition-colors duration-300">
                  {feat?.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feat?.desc}</p>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-15 transition-all duration-400 group-hover:scale-110"
                style={{ background: feat?.accentLine }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}