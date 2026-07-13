'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const destinations = [
{
  name: 'Kashmir',
  slug: 'kashmir',
  tagline: 'Paradise on Earth',
  video: "https://images.unsplash.com/photo-1647087269911-e4751c733a92",
  poster: "/assets/images/gulmarg-1783921071070.webp",
  duration: '5–7 Days',
  price: '₹18,000',
  highlights: ['Dal Lake', 'Gulmarg', 'Pahalgam'],
  span: 'lg:col-span-2'
},
{
  name: 'Kerala',
  slug: 'kerala',
  tagline: "God\'s Own Country",
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_153bfe89e-1772704937222.png",
  poster: "/assets/images/munnar-1-1783921259378.png",
  duration: '4–6 Days',
  price: '₹15,000',
  highlights: ['Backwaters', 'Munnar', 'Kovalam'],
  span: 'lg:col-span-1'
},
{
  name: 'Goa',
  slug: 'goa',
  tagline: 'Sun, Sand & Serenity',
  video: "https://images.unsplash.com/photo-1719210926487-a327a4f90307",
  poster: "/assets/images/Calangute-Beach-1783921400611.jpg",
  duration: '3–5 Days',
  price: '₹12,000',
  highlights: ['Baga Beach', 'Old Goa', 'Dudhsagar'],
  span: 'lg:col-span-1'
},
{
  name: 'Himachal Pradesh',
  slug: 'himachal-pradesh',
  tagline: 'Mountains & Magic',
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_13439f5f3-1773519414329.png",
  poster: "/assets/images/top-tourist-attractions-mob-banner-1783921461174.webp",
  duration: '5–8 Days',
  price: '₹16,000',
  highlights: ['Manali', 'Shimla', 'Spiti Valley'],
  span: 'lg:col-span-1'
},
{
  name: 'North East India',
  slug: 'north-east-india',
  tagline: 'Seven Sisters Await',
  video: "https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_25fps.mp4",
  poster: "https://images.unsplash.com/photo-1693342167497-3b6a6c66f5cd?w=800&q=80",
  duration: '6–9 Days',
  price: '₹20,000',
  highlights: ['Meghalaya', 'Assam', 'Sikkim'],
  span: 'lg:col-span-3'
}];

function DestinationCard({ dest, index, visible }: {dest: typeof destinations[0];index: number;visible: boolean;}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (visible && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [visible]);

  return (
    <div
      className={`destination-card ${dest.span} reveal-scale ${visible ? 'active' : ''} group relative rounded-3xl overflow-hidden cursor-pointer`}
      style={{
        transitionDelay: `${index * 80}ms`,
        minHeight: dest.name === 'North East India' ? 240 : 320,
        boxShadow: '0 8px 32px rgba(13,27,42,0.12)'
      }}>
      
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={dest.video}
          poster={dest.poster}
          autoPlay
          muted
          loop
          playsInline
          className="destination-card-img object-cover object-center w-full h-full"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        
      </div>

      {/* Base gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/5" />

      {/* Hover overlay — teal tint */}
      <div className="destination-card-overlay absolute inset-0" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 100%)' }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
        {/* Top badges */}
        <div className="flex justify-between items-start">
          <span className="glass-panel text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <svg className="w-3 h-3 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {dest.duration}
          </span>
          <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
            From {dest.price}
          </span>
        </div>

        {/* Bottom info */}
        <div>
          <p className="text-white/65 text-xs font-semibold uppercase tracking-widest mb-1.5">{dest.tagline}</p>
          <h3 className="font-display text-card-lg text-white font-semibold mb-3 drop-shadow-sm">{dest.name}</h3>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dest.highlights?.map((h) =>
            <span key={h} className="text-white text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {h}
              </span>
            )}
          </div>
          <Link
            href={`/packages/${dest.slug}`}
            className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-accent hover:text-white opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0"
            style={{ transition: 'opacity 0.35s cubic-bezier(0.23,1,0.32,1), transform 0.35s cubic-bezier(0.23,1,0.32,1), background-color 0.2s ease, color 0.2s ease', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
            
            Explore Package
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </div>);

}

export default function DomesticDestinations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.05 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="destinations" ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)' }}>
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal-up ${visible ? 'active' : ''}`}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Domestic Destinations
            </span>
            <h2 className="font-display text-section-xl text-foreground font-semibold">
              Incredible <span className="text-gradient-teal">India</span>
            </h2>
          </div>
          <Link
            href="/tour-packages"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 flex-shrink-0 group">
            
            View All Packages
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations?.map((dest, i) =>
          <DestinationCard key={dest.name} dest={dest} index={i} visible={visible} />
          )}
        </div>
      </div>
    </section>);

}