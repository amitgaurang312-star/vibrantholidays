'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface Departure {
  id: string;
  destination: string;
  country: string;
  image: string;
  alt: string;
  departureDate: string;
  returnDate: string;
  duration: string;
  price: string;
  seats: number;
  seatsLeft: number;
  highlights: string[];
  badge?: string;
  month: string;
}

const departures: Departure[] = [
{
  id: 'kashmir-jul',
  destination: 'Kashmir Valley',
  country: 'India',
  image: "https://images.unsplash.com/photo-1721857982139-28dd0ac7d7a7",
  alt: 'Kashmir snow mountains with frozen lake and dark pine forest in overcast light',
  departureDate: '15 Jul 2025',
  returnDate: '21 Jul 2025',
  duration: '7 Days / 6 Nights',
  price: '₹22,000',
  seats: 20,
  seatsLeft: 6,
  highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Houseboat Stay'],
  badge: 'Filling Fast',
  month: 'July 2025'
},
{
  id: 'bali-aug',
  destination: 'Bali',
  country: 'Indonesia',
  image: 'https://images.unsplash.com/photo-1583085529301-f917abadb5c2',
  alt: 'Bali jungle rice terraces in deep green shadow with dark volcanic hillside at dusk',
  departureDate: '02 Aug 2025',
  returnDate: '08 Aug 2025',
  duration: '7 Days / 6 Nights',
  price: '₹48,000',
  seats: 16,
  seatsLeft: 9,
  highlights: ['Uluwatu Temple', 'Mount Batur Sunrise', 'Seminyak Beach', 'Cooking Class'],
  month: 'August 2025'
},
{
  id: 'thailand-aug',
  destination: 'Thailand',
  country: 'Thailand',
  image: 'https://images.unsplash.com/photo-1583235850379-5be46fe06642',
  alt: 'Thailand Phi Phi islands at dusk with dark sea and shadowy limestone cliffs',
  departureDate: '18 Aug 2025',
  returnDate: '25 Aug 2025',
  duration: '8 Days / 7 Nights',
  price: '₹42,000',
  seats: 24,
  seatsLeft: 14,
  highlights: ['Bangkok Temples', 'Phi Phi Island', 'Floating Market', 'Pattaya Beach'],
  badge: 'Group Special',
  month: 'August 2025'
},
{
  id: 'dubai-sep',
  destination: 'Dubai',
  country: 'UAE',
  image: 'https://images.unsplash.com/photo-1630210414374-70a0439e286c',
  alt: 'Dubai Burj Khalifa at night against dark blue sky with bright city lights below',
  departureDate: '05 Sep 2025',
  returnDate: '10 Sep 2025',
  duration: '6 Days / 5 Nights',
  price: '₹58,000',
  seats: 18,
  seatsLeft: 11,
  highlights: ['Burj Khalifa', 'Desert Safari', 'Dhow Cruise', 'Dubai Mall'],
  month: 'September 2025'
},
{
  id: 'kerala-sep',
  destination: 'Kerala Backwaters',
  country: 'India',
  image: 'https://images.unsplash.com/photo-1584906608816-1089f128b201',
  alt: 'Kerala houseboat on backwaters at dusk with dark water reflections and dim golden light',
  departureDate: '20 Sep 2025',
  returnDate: '25 Sep 2025',
  duration: '6 Days / 5 Nights',
  price: '₹18,000',
  seats: 20,
  seatsLeft: 3,
  highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Alleppey Backwaters', 'Ayurveda Spa'],
  badge: 'Almost Full',
  month: 'September 2025'
},
{
  id: 'maldives-oct',
  destination: 'Maldives',
  country: 'Maldives',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10eb8dfdc-1772250254542.png',
  alt: 'Maldives overwater villa at sunset with dark turquoise water and golden horizon light',
  departureDate: '10 Oct 2025',
  returnDate: '15 Oct 2025',
  duration: '6 Days / 5 Nights',
  price: '₹78,000',
  seats: 12,
  seatsLeft: 8,
  highlights: ['Water Villa', 'Sunset Cruise', 'Snorkeling', 'Candlelit Dinner'],
  badge: 'Luxury',
  month: 'October 2025'
}];


const months = [...new Set(departures.map((d) => d.month))];

export default function DeparturesList() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-14 reveal-up ${visible ? 'active' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Upcoming Departures
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Book Your <span className="text-gradient-gold">Seat Today</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            All departures are guaranteed. Pay a small advance to reserve your spot.
          </p>
        </div>

        {/* Months */}
        {months.map((month) => (
          <div key={month} className="mb-14">
            {/* Month Label */}
            <div className={`flex items-center gap-4 mb-8 reveal-up ${visible ? 'active' : ''}`}>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,138,143,0.25))' }} />
              <span className="px-5 py-2 rounded-full text-white text-sm font-semibold tracking-wide" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 16px rgba(11,138,143,0.35)' }}>
                {month}
              </span>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(11,138,143,0.25), transparent)' }} />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departures
                .filter((d) => d.month === month)
                .map((dep, i) => {
                  const pct = Math.round((dep.seats - dep.seatsLeft) / dep.seats * 100);
                  return (
                    <div
                      key={dep.id}
                      className={`reveal-scale ${visible ? 'active' : ''} group bg-white rounded-3xl overflow-hidden border border-border/60 card-hover`}
                      style={{ transitionDelay: `${i * 80}ms`, boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}
                    >
                      {/* Image */}
                      <div className="relative h-44 overflow-hidden">
                        <AppImage
                          src={dep.image}
                          alt={dep.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                          style={{ transition: 'transform 0.7s cubic-bezier(0.23,1,0.32,1)' }}
                        />
                        {dep.badge && (
                          <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
                            {dep.badge}
                          </span>
                        )}
                        <span className="absolute top-3 right-3 glass-panel text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {dep.duration}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <p className="text-muted-foreground text-xs font-medium mb-1 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {dep.country}
                        </p>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-3">{dep.destination}</h3>

                        {/* Dates */}
                        <div className="flex items-center gap-2 mb-3 text-sm">
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-foreground font-medium">{dep.departureDate}</span>
                          <span className="text-muted-foreground">→</span>
                          <span className="text-foreground font-medium">{dep.returnDate}</span>
                        </div>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {dep.highlights.slice(0, 3).map((h) => (
                            <span key={h} className="text-xs text-muted-foreground px-2 py-0.5 rounded-full" style={{ background: '#EEF3F8', border: '1px solid rgba(11,138,143,0.10)' }}>
                              {h}
                            </span>
                          ))}
                        </div>

                        {/* Seats bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-xs mb-1.5">
                            <span className="text-muted-foreground">Seats filled</span>
                            <span className={`font-semibold ${dep.seatsLeft <= 4 ? 'text-red-500' : 'text-primary'}`}>
                              {dep.seatsLeft} left
                            </span>
                          </div>
                          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: '#EEF3F8' }}>
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #0B8A8F, #0ABBC2)' }}
                            />
                          </div>
                        </div>

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-muted-foreground">Starting from</p>
                            <p className="text-xl font-bold text-primary">{dep.price}<span className="text-xs font-normal text-muted-foreground">/person</span></p>
                          </div>
                          <Link
                            href="/contact"
                            className="text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-teal hover:-translate-y-0.5"
                            style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}
                          >
                            Book Seat
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}