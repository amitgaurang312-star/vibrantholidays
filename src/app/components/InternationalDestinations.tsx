'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const intlDestinations = [
{
  name: 'Dubai',
  slug: 'dubai',
  tagline: 'City of Gold',
  video: "https://images.unsplash.com/photo-1630356032837-12a94e7d83b8",
  poster: "/assets/images/30.124.1-DTCM-Madinat-Jumeirah-Image-by-Dubai-Tourism-1783921705111.webp",
  duration: '4–6 Days',
  price: '₹55,000',
  highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall'],
  span: 'lg:col-span-2'
},
{
  name: 'Thailand',
  slug: 'thailand',
  tagline: 'Land of Smiles',
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_14ac3d215-1778481765752.png",
  poster: "/assets/images/featured1-1783921966866.webp",
  duration: '5–7 Days',
  price: '₹45,000',
  highlights: ['Bangkok', 'Phuket', 'Phi Phi Island'],
  span: 'lg:col-span-1'
},
{
  name: 'Bali',
  slug: 'bali',
  tagline: 'Island of the Gods',
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_1969e0b6e-1770861598771.png",
  poster: "/assets/images/HD-wallpaper-bali-rocks-ocean-beautiful-bay-summer-aerial-view-sea-waves-tropical-islands-1783922167679.jpg",
  duration: '5–7 Days',
  price: '₹48,000',
  highlights: ['Ubud', 'Seminyak', 'Uluwatu'],
  span: 'lg:col-span-1'
},
{
  name: 'Vietnam',
  slug: 'vietnam',
  tagline: 'Timeless Beauty',
  video: "https://images.unsplash.com/photo-1619328264421-93be7916060f",
  poster: "/assets/images/HOI-AN-1783922319250.jpg",
  duration: '6–8 Days',
  price: '₹52,000',
  highlights: ['Ha Long Bay', 'Hanoi', 'Hoi An'],
  span: 'lg:col-span-2'
},
{
  name: 'Singapore',
  slug: 'singapore',
  tagline: 'Garden City',
  video: "https://images.unsplash.com/photo-1658401608982-4b65c69374fc",
  poster: "/assets/images/shutterstock-125810687_destinationMain_1533204954238-1783922542371.jpeg",
  duration: '4–5 Days',
  price: '₹58,000',
  highlights: ['Marina Bay', 'Gardens by Bay', 'Sentosa'],
  span: 'lg:col-span-1'
},
{
  name: 'Singapore–Malaysia',
  slug: 'singapore-malaysia',
  tagline: 'Twin Destinations',
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_1dcd11797-1767784132363.png",
  poster: "/assets/images/Singapore-malaysia-thailand-tour-packages-1783922727558.jpg",
  duration: '6–8 Days',
  price: '₹65,000',
  highlights: ['Petronas Towers', 'Langkawi', 'Clarke Quay'],
  span: 'lg:col-span-1'
},
{
  name: 'Sri Lanka',
  slug: 'sri-lanka',
  tagline: 'Pearl of the Indian Ocean',
  video: "https://img.rocket.new/generatedImages/rocket_gen_img_1275c45c7-1770116024836.png",
  poster: "/assets/images/Sri-Lankan-tourism-growing-ambitious-targets-for-2024-1783922957243.jpeg",
  duration: '5–7 Days',
  price: '₹38,000',
  highlights: ['Kandy', 'Ella', 'Sigiriya'],
  span: 'lg:col-span-1'
},
{
  name: 'Maldives',
  slug: 'maldives',
  tagline: 'Heaven on Water',
  video: "https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_25fps.mp4",
  poster: "https://images.unsplash.com/photo-1599826602562-e083aa659710?w=800&q=80",
  duration: '3–4 Days',
  price: '₹75,000',
  highlights: ['Water Villas', 'Snorkeling', 'Sunset Cruise'],
  span: 'lg:col-span-3'
}];

function IntlCard({ dest, index, visible }: {dest: typeof intlDestinations[0];index: number;visible: boolean;}) {
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
        transitionDelay: `${index * 70}ms`,
        minHeight: dest.name === 'Maldives' ? 260 : 300,
        boxShadow: '0 8px 32px rgba(13,27,42,0.12)'
      }}>
      
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={dest.video}
          poster={dest.poster}
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center w-full h-full"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        
      </div>

      {/* Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />
      <div className="destination-card-overlay absolute inset-0" />

      <div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
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

        <div>
          <p className="text-white text-xs font-semibold uppercase tracking-widest mb-1.5" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>{dest.tagline}</p>
          <h3 className="font-display text-card-lg text-white font-semibold mb-3" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}>{dest.name}</h3>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dest.highlights?.map((h) =>
            <span key={h} className="text-white text-xs px-2.5 py-1 rounded-full font-medium" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                {h}
              </span>
            )}
          </div>
          <Link
            href={`/packages/${dest.slug}`}
            className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0"
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

export default function InternationalDestinations() {
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
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-0 w-80 h-80 orb orb-gold opacity-15 pointer-events-none" style={{ animation: 'orb-float 11s ease-in-out infinite' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal-up ${visible ? 'active' : ''}`}>
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(216,154,36,0.10)', color: '#D89A24', border: '1px solid rgba(216,154,36,0.20)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              International Destinations
            </span>
            <h2 className="font-display text-section-xl text-foreground font-semibold">
              Explore the <span className="text-gradient-gold">World</span>
            </h2>
          </div>
          <Link
            href="/tour-packages"
            className="flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all duration-300 flex-shrink-0 group">
            
            All International Packages
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {intlDestinations?.map((dest, i) =>
          <IntlCard key={dest.name} dest={dest} index={i} visible={visible} />
          )}
        </div>

        {/* CTA Banner */}
        <div
          className={`mt-12 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-6 reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{
            background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 50%, #067A7F 100%)',
            transitionDelay: '600ms',
            boxShadow: '0 20px 60px rgba(11,138,143,0.35)'
          }}>
          
          {/* Decorative orb */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
          <div className="absolute -left-8 -bottom-8 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(216,154,36,0.6) 0%, transparent 70%)' }} />

          <div className="relative z-10">
            <h3 className="font-display text-2xl lg:text-3xl font-semibold text-white mb-2">
              Dream destination not listed?
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              We arrange customized tours to Europe, Mauritius, Nepal, Bhutan, and beyond.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative z-10 flex-shrink-0 flex items-center gap-2.5 bg-white text-primary px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}>
            
            Get Custom Quote
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>);

}