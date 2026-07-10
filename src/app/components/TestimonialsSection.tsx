'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const testimonials = [
{
  name: 'Priya Sharma',
  location: 'Pune',
  rating: 5,
  text: 'Vibrant Holidays planned our Kashmir trip perfectly. Every detail was taken care of — from Dal Lake shikara to the houseboat stay. Truly a paradise experience!',
  trip: 'Kashmir Family Tour',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ecb4aca8-1763296537332.png",
  avatarAlt: 'Indian woman smiling with dark hair, professional headshot with warm lighting',
  color: '#0B8A8F',
},
{
  name: 'Rahul & Sneha Desai',
  location: 'Nashik',
  rating: 5,
  text: 'Our Maldives honeymoon was absolutely magical. The water villa, sunset cruise, and snorkeling were beyond our expectations. Best investment we ever made!',
  trip: 'Maldives Honeymoon',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1b02b7bf9-1763301533769.png",
  avatarAlt: 'Indian man with glasses smiling, clean background, natural daylight portrait',
  color: '#D89A24',
},
{
  name: 'Anjali Kulkarni',
  location: 'Mumbai',
  rating: 5,
  text: 'Dubai was a dream! The team arranged everything from visa to desert safari. The Burj Khalifa view at night was breathtaking. Highly recommend Vibrant Holidays!',
  trip: 'Dubai City Tour',
  avatar: "https://images.unsplash.com/photo-1675018996213-dab82e090a2e",
  avatarAlt: 'Indian woman with bright smile in colorful attire, outdoor natural light portrait',
  color: '#0ABBC2',
},
{
  name: 'Vikram Joshi',
  location: 'Pune',
  rating: 5,
  text: 'Bali with family was seamless. The team customized our itinerary to include the Tegallalang rice terraces and Uluwatu temple. Kids loved every moment!',
  trip: 'Bali Family Package',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_195a56a22-1763296537088.png",
  avatarAlt: 'Indian man with warm smile, casual shirt, professional headshot with soft background',
  color: '#0B8A8F',
}];


export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 orb orb-teal opacity-15 pointer-events-none" style={{ animation: 'orb-float 9s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-0 w-64 h-64 orb orb-gold opacity-12 pointer-events-none" style={{ animation: 'orb-float 11s ease-in-out infinite reverse' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 reveal-up ${visible ? 'active' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(216,154,36,0.10)', color: '#D89A24', border: '1px solid rgba(216,154,36,0.20)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Happy Travellers
          </span>
          <h2 className="font-display text-section-xl text-foreground font-semibold mb-5">
            Stories That <span className="text-gradient-teal">Inspire</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Real experiences from families and couples who trusted Vibrant Holidays.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials?.map((t, i) => (
            <div
              key={t?.name}
              className={`reveal-scale ${visible ? 'active' : ''} group relative bg-white rounded-2xl p-6 border border-border/60 card-hover overflow-hidden`}
              style={{
                transitionDelay: `${i * 100}ms`,
                boxShadow: '0 2px 16px rgba(13,27,42,0.05)',
              }}
            >
              {/* Top color accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${t?.color}, ${t?.color}60)` }} />

              {/* Quote mark decoration */}
              <div className="absolute top-4 right-4 opacity-6 group-hover:opacity-10 transition-opacity duration-300">
                <svg className="w-12 h-12" style={{ color: t?.color }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(t?.rating)]?.map((_, si) => (
                  <svg key={si} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <p className="text-foreground/80 text-sm leading-relaxed mb-5 line-clamp-4">
                &ldquo;{t?.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 ring-2" style={{ ringColor: `${t?.color}30` }}>
                  <AppImage
                    src={t?.avatar}
                    alt={t?.avatarAlt}
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-foreground font-semibold text-sm truncate">{t?.name}</p>
                  <p className="text-muted-foreground text-xs">{t?.location} · {t?.trip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <div className={`mt-14 flex justify-center reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '500ms' }}>
          <div
            className="flex items-center gap-4 px-7 py-4 rounded-2xl"
            style={{
              background: 'white',
              border: '1px solid rgba(11,138,143,0.15)',
              boxShadow: '0 4px 24px rgba(13,27,42,0.07)',
            }}
          >
            <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-foreground font-bold text-base">4.9</span>
                <div className="flex gap-0.5">
                  {[...Array(5)]?.map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground text-xs">on Google Reviews · 100+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}