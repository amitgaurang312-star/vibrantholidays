'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

const whyChoose = [
'Bespoke holiday planning designed around you',
'Curated experiences beyond the ordinary',
'Transparent pricing with exceptional value',
'Trusted travel partners across India and around the world',
'Dedicated travel experts offering personalized assistance at every step'];


export default function AboutStory() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Story Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Who We Are
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Crafting <span className="text-gradient-gold">Extraordinary</span> Journeys
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              At Vibrant Holidays, we believe every journey should be as unique as the traveler. We don't simply book vacations—we design thoughtfully curated travel experiences that inspire, delight, and create memories that last a lifetime.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Driven by a passion for travel and a commitment to exceptional service, Vibrant Holidays offers handcrafted domestic and international holidays tailored to your interests, travel style, and budget. Whether you're dreaming of a romantic honeymoon, a fun-filled family vacation, an adventure with friends, a luxurious escape, or a culturally immersive experience, we take care of every detail so you can travel with complete peace of mind.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our expertise lies in creating seamless travel experiences through carefully selected accommodations, reliable transport, authentic local experiences, and personalized itineraries. Every destination is chosen with care, every itinerary is planned with precision, and every journey is backed by dedicated support from the moment you contact us until you return home.
            </p>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(13,27,42,0.15)' }}>
              <AppImage
                src="https://images.unsplash.com/photo-1700588839364-49c67ee975af"
                alt="A couple in casual traveller clothes enjoying Dubai destinations with the iconic skyline in the background"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center" />
              
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-border/60 rounded-2xl p-5 max-w-xs" style={{ boxShadow: '0 8px 32px rgba(13,27,42,0.12)' }}>
              <div className="flex items-center gap-3 mb-2">
                <AppLogo size={36} />
                <div>
                  <p className="font-semibold text-foreground text-sm">Vibrant Holidays</p>
                  <p className="text-muted-foreground text-xs">Pune, Maharashtra</p>
                </div>
              </div>
              <div className="flex gap-1 mb-1">
                {[1, 2, 3, 4, 5]?.map((s) =>
                <svg key={s} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <p className="text-muted-foreground text-xs">Rated 4.9/5 by 9 travellers</p>
            </div>
          </div>
        </div>

        {/* Why Travel with Vibrant Holidays */}
        <div className={`mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="rounded-3xl p-10 border" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.06), rgba(11,138,143,0.02))', borderColor: 'rgba(11,138,143,0.15)' }}>
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-8 text-center">
              Why Travel with <span className="text-gradient-gold">Vibrant Holidays?</span>
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {whyChoose?.map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(11,138,143,0.15)' }}>
                    <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-muted-foreground leading-relaxed">{item}</span>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Vision & Promise */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.08), rgba(11,138,143,0.04))', borderColor: 'rgba(11,138,143,0.15)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(11,138,143,0.15)' }}>
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become one of India's most trusted travel brand, recognized for creating inspiring journeys, delivering exceptional service, and building lifelong relationships with travelers.
            </p>
          </div>
          <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(216,154,36,0.08), rgba(216,154,36,0.04))', borderColor: 'rgba(216,154,36,0.20)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(216,154,36,0.15)' }}>
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Promise</h3>
            <p className="text-muted-foreground leading-relaxed">
              Every trip we create reflects our commitment to quality, reliability, and genuine hospitality. Because for us, travel is not just about reaching a destination—it's about experiencing the world in the most meaningful way.
            </p>
          </div>
        </div>

        {/* Tagline Banner */}
        <div className={`mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="rounded-3xl p-10 text-center border" style={{ background: 'linear-gradient(135deg, rgba(216,154,36,0.08), rgba(216,154,36,0.04))', borderColor: 'rgba(216,154,36,0.20)' }}>
            <p className="font-display text-xl lg:text-2xl font-semibold text-foreground mb-2">
              Where Every Journey Begins with Trust and Ends with Beautiful Memories.
            </p>
            <p className="text-accent font-semibold text-lg">Vibrant Holidays — Travel Beautifully.</p>
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={`rounded-3xl p-10 text-center reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 60%, #067A7F 100%)', boxShadow: '0 20px 60px rgba(11,138,143,0.35)' }}>
          
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
          <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(216,154,36,0.6) 0%, transparent 70%)' }} />
          <h3 className="font-display text-3xl font-semibold text-white mb-3 relative z-10">
            Let's Plan Your Next Adventure
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto relative z-10">
            Talk to our travel experts today. No obligation, just great travel ideas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #C8860E, #D89A24, #F0BC4A)' }}>
              
              Get in Touch
            </Link>
            <a
              href="tel:+918668355974"
              className="inline-flex items-center justify-center gap-2 text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.12)' }}>
              
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 8668355974
            </a>
          </div>
        </div>

      </div>
    </section>);

}