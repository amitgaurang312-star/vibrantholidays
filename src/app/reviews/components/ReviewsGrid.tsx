'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Review {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  destination: string;
  review: string;
  tag: string;
}

const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Priya Sharma',
    location: 'Pune, Maharashtra',
    avatar: 'PS',
    rating: 5,
    date: 'March 2025',
    destination: 'Kashmir',
    review: 'Absolutely magical experience! The houseboat on Dal Lake was beyond our expectations. Vibrant Holidays took care of every single detail — from airport pickup to the last day. Our family trip to Kashmir was truly a dream come true.',
    tag: 'Family Tour',
  },
  {
    id: 'r2',
    name: 'Rahul & Sneha Mehta',
    location: 'Mumbai, Maharashtra',
    avatar: 'RM',
    rating: 5,
    date: 'February 2025',
    destination: 'Maldives',
    review: 'Our honeymoon in Maldives was flawless. The water villa, the sunset cruise, the candlelit dinner on the beach — everything was perfectly arranged. Vibrant Holidays made our honeymoon truly unforgettable. Highly recommended!',
    tag: 'Honeymoon',
  },
  {
    id: 'r3',
    name: 'Amit Joshi',
    location: 'Nashik, Maharashtra',
    avatar: 'AJ',
    rating: 5,
    date: 'January 2025',
    destination: 'Dubai',
    review: 'First international trip with family and it was perfect! The team guided us through everything — visa, flights, hotels. The desert safari was the highlight. Will definitely book again for Thailand!',
    tag: 'Family Tour',
  },
  {
    id: 'r4',
    name: 'Kavita Desai',
    location: 'Nagpur, Maharashtra',
    avatar: 'KD',
    rating: 5,
    date: 'December 2024',
    destination: 'Bali',
    review: 'Bali with Vibrant Holidays was an experience of a lifetime. The itinerary was perfectly balanced — adventure, culture, and relaxation. The team was always reachable and resolved every query instantly.',
    tag: 'Adventure',
  },
  {
    id: 'r5',
    name: 'Suresh & Meena Patil',
    location: 'Kolhapur, Maharashtra',
    avatar: 'SP',
    rating: 5,
    date: 'November 2024',
    destination: 'Kerala',
    review: 'The Kerala backwaters trip was serene and beautiful. The houseboat was luxurious and the food was amazing. Vibrant Holidays arranged everything seamlessly. We felt completely relaxed throughout the trip.',
    tag: 'Honeymoon',
  },
  {
    id: 'r6',
    name: 'Nikhil Kulkarni',
    location: 'Aurangabad, Maharashtra',
    avatar: 'NK',
    rating: 5,
    date: 'October 2024',
    destination: 'Thailand',
    review: 'Thailand group tour was fantastic! Met amazing people, visited incredible places. The team at Vibrant Holidays was professional and friendly. Phi Phi Island was breathtaking. Already planning my next trip with them!',
    tag: 'Group Tour',
  },
  {
    id: 'r7',
    name: 'Pooja Wagh',
    location: 'Pune, Maharashtra',
    avatar: 'PW',
    rating: 5,
    date: 'September 2024',
    destination: 'Singapore',
    review: 'Singapore trip was well-organised and value for money. Gardens by the Bay, Universal Studios, Marina Bay Sands — all covered perfectly. The visa process was handled smoothly by the team. 5 stars!',
    tag: 'Family Tour',
  },
  {
    id: 'r8',
    name: 'Deepak Sawant',
    location: 'Satara, Maharashtra',
    avatar: 'DS',
    rating: 5,
    date: 'August 2024',
    destination: 'Himachal Pradesh',
    review: 'The Himachal adventure trek was thrilling! Rohtang Pass, Triund trek, river rafting — all in one trip. Vibrant Holidays planned it perfectly. The camping under the stars was the best part. Highly recommended for adventure lovers!',
    tag: 'Adventure',
  },
  {
    id: 'r9',
    name: 'Anita & Ravi Bhosale',
    location: 'Solapur, Maharashtra',
    avatar: 'AB',
    rating: 5,
    date: 'July 2024',
    destination: 'Goa',
    review: 'Quick Goa weekend trip was perfectly planned. Great hotel, beach activities, and the Dudhsagar Falls visit was spectacular. The team was responsive and helpful throughout. Will definitely book again!',
    tag: 'Weekend Trip',
  },
];

const tags = ['All', 'Family Tour', 'Honeymoon', 'Adventure', 'Group Tour', 'Weekend Trip'];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`w-4 h-4 ${s <= rating ? 'text-accent' : 'text-muted'}`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGrid() {
  const [activeTag, setActiveTag] = useState('All');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = activeTag === 'All' ? reviews : reviews.filter((r) => r.tag === activeTag);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Overall Rating Banner */}
        <div
          className={`rounded-3xl p-8 mb-14 flex flex-col sm:flex-row items-center justify-between gap-6 reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{
            background: 'linear-gradient(135deg, rgba(11,138,143,0.08) 0%, rgba(216,154,36,0.06) 100%)',
            border: '1px solid rgba(11,138,143,0.15)',
            boxShadow: '0 4px 32px rgba(11,138,143,0.08)',
          }}
        >
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-3 justify-center sm:justify-start mb-2">
              <span className="font-display text-6xl font-bold text-primary">4.9</span>
              <div>
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm">Based on 100+ reviews</p>
              </div>
            </div>
            <p className="text-foreground font-semibold text-lg">Rated Excellent by Our Travellers</p>
          </div>
          <div className="flex gap-8 text-center">
            {[['100%', 'Satisfaction'], ['100+', 'Happy Travellers'], ['50+', 'Destinations']].map(([val, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-primary">{val}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tags */}
        <div className={`flex flex-wrap gap-2 mb-10 reveal-up ${visible ? 'active' : ''}`}>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTag === tag
                  ? 'text-white shadow-teal'
                  : 'bg-white border border-border/60 text-muted-foreground hover:border-primary hover:text-primary'
              }`}
              style={activeTag === tag ? { background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' } : {}}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Reviews Grid — masonry-style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map((r, i) => (
            <div
              key={r.id}
              className={`reveal-scale ${visible ? 'active' : ''} break-inside-avoid bg-white border border-border/60 rounded-2xl p-6 card-hover`}
              style={{ transitionDelay: `${i * 60}ms`, boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}>
                    {r.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.location}</p>
                  </div>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F' }}>
                  {r.destination}
                </span>
              </div>

              {/* Stars + Date */}
              <div className="flex items-center justify-between mb-3">
                <StarRating rating={r.rating} />
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed">{r.review}</p>

              {/* Tag */}
              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(216,154,36,0.10)', color: '#D89A24' }}>
                  {r.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-16 rounded-3xl p-10 text-center reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 60%, #067A7F 100%)', boxShadow: '0 20px 60px rgba(11,138,143,0.35)' }}
        >
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
          <h3 className="font-display text-3xl font-semibold text-white mb-3 relative z-10">
            Ready to Create Your Own Story?
          </h3>
          <p className="text-white/80 mb-6 max-w-lg mx-auto relative z-10">
            Join 100+ happy travellers who trusted Vibrant Holidays for their dream vacation.
          </p>
          <Link
            href="/tour-packages"
            className="inline-flex items-center gap-2 text-primary px-8 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 relative z-10"
            style={{ background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
          >
            Book Your Trip
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
