'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import AppLogo from '@/components/ui/AppLogo';

const milestones = [
{ year: '2018', title: 'Founded', desc: 'Vibrant Holidays was born in Pune with a simple mission — make travel accessible, personal, and unforgettable.' },
{ year: '2019', title: 'First 50 Customers', desc: 'Word spread fast. Within a year, 50 families trusted us with their dream vacations across India.' },
{ year: '2021', title: 'International Expansion', desc: 'We launched international packages — Dubai, Thailand, Bali, Singapore — and quickly became a go-to for overseas travel.' },
{ year: '2023', title: 'Visa Services Launch', desc: 'Added dedicated visa assistance services, making end-to-end travel planning seamless for our customers.' },
{ year: '2025', title: '100+ Happy Travellers', desc: 'Today, over 100 families have explored the world with us. Every trip is still planned with the same personal touch.' }];


const values = [
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>,

  title: 'Passion for Travel',
  desc: 'Every itinerary is crafted by people who genuinely love to travel. We\'ve been to these destinations — we know what makes them special.'
},
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>,

  title: 'Trust & Transparency',
  desc: 'No hidden charges. No false promises. What we quote is what you pay. Our customers trust us because we\'ve earned it.'
},
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>,

  title: 'Personalised Service',
  desc: 'Every trip is unique. We listen to your preferences, budget, and travel style to craft an itinerary that\'s truly yours.'
},
{
  icon:
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>,

  title: '24×7 Support',
  desc: 'Whether you\'re at the airport at 3 AM or need help mid-trip, our team is always just a call or WhatsApp message away.'
}];


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

        {/* Story Section */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Who We Are
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              We Turn <span className="text-gradient-gold">Travel Dreams</span> Into Reality
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-5">
              Vibrant Holidays is a Pune-based travel company founded with one belief — every person deserves a holiday that feels tailor-made. We started small, with a handful of families who trusted us with their Kashmir trip. Today, we've helped 100+ travellers explore destinations across India and the world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              From the snow-capped peaks of Kashmir to the crystal waters of Maldives, from the temples of Bali to the skyline of Dubai — we've been there, we know the best spots, and we bring that knowledge to every itinerary we craft.
            </p>
            <div className="flex flex-wrap gap-6">
              {[['100+', 'Happy Travellers'], ['50+', 'Destinations'], ['7+', 'Years Experience'], ['24×7', 'Support']]?.map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="font-display text-3xl font-bold text-primary">{val}</p>
                  <p className="text-muted-foreground text-xs mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(13,27,42,0.15)' }}>
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_127abc45a-1778918128286.png"
                alt="Travel planning with maps and passport on a table with warm golden light"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
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
                {[1, 2, 3, 4, 5]?.map((s) => (
                  <svg key={s} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-muted-foreground text-xs">Rated 4.9/5 by 100+ travellers</p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.08), rgba(11,138,143,0.04))', borderColor: 'rgba(11,138,143,0.15)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(11,138,143,0.15)' }}>
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To make premium travel accessible to every Indian family — with personalised itineraries, transparent pricing, and end-to-end support that makes every journey stress-free and memorable.
            </p>
          </div>
          <div className="rounded-3xl p-8 border" style={{ background: 'linear-gradient(135deg, rgba(216,154,36,0.08), rgba(216,154,36,0.04))', borderColor: 'rgba(216,154,36,0.20)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: 'rgba(216,154,36,0.15)' }}>
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become Maharashtra's most trusted travel partner — known not just for the destinations we cover, but for the relationships we build and the memories we help create for every family we serve.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-foreground mb-3">
              Our <span className="text-gradient-gold">Journey</span>
            </h2>
            <p className="text-muted-foreground">From a small startup to 100+ happy travellers</p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,138,143,0.3), rgba(216,154,36,0.3), transparent)' }} />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {milestones?.map((m, i) => (
                <div
                  key={m?.year}
                  className={`reveal-scale ${visible ? 'active' : ''} relative`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="hidden lg:flex justify-center mb-4">
                    <div className="w-4 h-4 rounded-full border-4 border-white relative z-10" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 0 12px rgba(11,138,143,0.5)' }} />
                  </div>
                  <div className="bg-white border border-border/60 rounded-2xl p-5" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}>
                    <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3" style={{ background: 'rgba(216,154,36,0.12)', color: '#D89A24' }}>{m?.year}</span>
                    <h4 className="font-display text-base font-semibold text-foreground mb-2">{m?.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m?.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className={`mb-24 reveal-up ${visible ? 'active' : ''}`}>
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl font-semibold text-foreground mb-3">
              Why Customers <span className="text-gradient-gold">Trust Us</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values?.map((v, i) => (
              <div
                key={v?.title}
                className={`reveal-scale ${visible ? 'active' : ''} bg-white border border-border/60 rounded-2xl p-6 flex gap-5 card-hover`}
                style={{ transitionDelay: `${i * 80}ms`, boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F' }}>
                  {v?.icon}
                </div>
                <div>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-2">{v?.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{v?.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div
          className={`rounded-3xl p-10 text-center reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 60%, #067A7F 100%)', boxShadow: '0 20px 60px rgba(11,138,143,0.35)' }}
        >
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
              style={{ background: 'linear-gradient(135deg, #C8860E, #D89A24, #F0BC4A)' }}
            >
              Get in Touch
            </Link>
            <a
              href="tel:+918668355974"
              className="inline-flex items-center justify-center gap-2 text-white border border-white/30 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/20"
              style={{ background: 'rgba(255,255,255,0.12)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 8668355974
            </a>
          </div>
        </div>
      </div>
    </section>
  );

}