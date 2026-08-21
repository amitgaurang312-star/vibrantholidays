'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  review: string;
  reviewCount?: number;
  photos?: string[];
}

const reviews: Review[] = [
  {
    id: 'r1',
    name: 'VRUSHALI SHITOLE',
    avatar: 'VS',
    rating: 5,
    date: '2 days ago',
    review: 'Excellent arrangements safe journey with Vibrant Holidays',
  },
  {
    id: 'r2',
    name: 'Sangita Navghare',
    avatar: 'SN',
    rating: 5,
    date: '2 days ago',
    review: 'Very good trip arrangement done by kedar for our Thailand, Bangkok, phuket, trip. We enjoyed the trip thoroughly, all coordination and booking done perfect. Thankyou',
    photos: [
      'https://lh3.googleusercontent.com/p/AF1QipN_Thailand_1=w400-h300-k-no',
    ],
  },
  {
    id: 'r3',
    name: 'Kirti Kadam',
    avatar: 'KK',
    rating: 5,
    date: '2 days ago',
    review: 'I have traveled with Vibrant Holidays multiple times with my friends and family, both domestic and international. Every trip has been well planned, with comfortable hotels, clean vehicles, and courteous drivers. Mr. Kedar and his team were always available throughout the journey, ensuring everything went smoothly. Their professionalism, prompt support, and attention to detail made each trip stress-free and memorable. I highly recommend Vibrant Holidays to anyone looking for a reliable travel partner. Looking forward to many more wonderful trips with them!',
  },
  {
    id: 'r4',
    name: 'Rajkumar Dhas',
    avatar: 'RD',
    rating: 5,
    date: '2 days ago',
    reviewCount: 2,
    review: 'Virant holidays has given very excellent service through out our journey. The Hotels booked for tour were 4 star categories with reasonable tariff. The vehicle provided ( Tempo Traveler) was very good condition and driver was very polite and act as our tour guide. Vehicle was very clean and neat. Our tour start at Madurai and ends at Trivendrum via Rameshwaram and Kanyakumari. Mr Kedar from Vibrant holiday was always touch with us for necessary guidance and safe journey. Thanks and will look forward for next trip. Regards Rajkumar Dhas.',
  },
  {
    id: 'r5',
    name: 'Babita Rai',
    avatar: 'BR',
    rating: 5,
    date: '3 days ago',
    review: 'Wonderful experience with Vibrant Holidays, End to End planning of the whole trip done wonderfully by Mr. Kadam. A memorable experience in South India Tour. Would definitely recommend using their service',
  },
  {
    id: 'r6',
    name: 'Saylee Navghare',
    avatar: 'SN',
    rating: 5,
    date: '3 days ago',
    review: 'Fantastic planning and execution of trip done by Mr. Kedar Kadam. Vibrant Holidays has planned perfect itinerary for our family and friends. On time response and reasonable prices.',
  },
  {
    id: 'r7',
    name: 'Snehal Wankhade',
    avatar: 'SW',
    rating: 5,
    date: '1 week ago',
    review: 'Good planning and support from vibrant holidays team, thank you for arranging such a beautiful trip.',
  },
  {
    id: 'r8',
    name: 'Sahebrao Kadam',
    avatar: 'SK',
    rating: 5,
    date: '2 days ago',
    review: 'Vibrant Holidays Pune, started by a brilliant young man...\n1) We did our first trip with Vibrant Holidays to Dubai, Abu Dhabi. I was a little nervous. But the team of Vibrant Holidays proved our nervousness wrong and made our trip enjoyable and wonderful. The hotel, the car, everything was so well planned. That\'s when we decided to do our next trip with Vibrant Holidays.\n2) We decided to do our second trip to Kashmir. As usual, the team of Vibrant Holidays made our trip memorable by planning and arranging it wonderfully. While enjoying the trip, we met many tourists. Talking to them, listening to the tour package they got, we realized that Vibrant Holidays has offered us a very reasonable package.\nI want to tell people...do a tour with Vibrant Holidays once, you will feel the difference...',
  },
  {
    id: 'r9',
    name: 'Ashwini Wakhare',
    avatar: 'AW',
    rating: 5,
    date: '2 days ago',
    review: 'Khup ch bhannat zali trip…Good experience good organisation vibrant holiday…all over Dhamaal trip',
  },
];

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

function GoogleIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function ReviewsGrid() {
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
                <p className="text-muted-foreground text-sm">Based on 9 Google reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <GoogleIcon />
              <p className="text-foreground font-semibold text-lg">Rated Excellent on Google</p>
            </div>
          </div>
          <div className="flex gap-8 text-center">
            {[['4.9★', 'Google Rating'], ['9', 'Verified Reviews'], ['100%', 'Satisfaction']].map(([val, label]) => (
              <div key={label}>
                <p className="font-display text-2xl font-bold text-primary">{val}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid — masonry-style */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((r, i) => (
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
                    <div className="flex items-center gap-1 mt-0.5">
                      <GoogleIcon />
                      <p className="text-muted-foreground text-xs">Google Review{r.reviewCount ? ` · ${r.reviewCount} reviews` : ''}</p>
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground flex-shrink-0">{r.date}</span>
              </div>

              {/* Stars */}
              <div className="mb-3">
                <StarRating rating={r.rating} />
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{r.review}</p>
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
            Join our happy travellers who trusted Vibrant Holidays for their dream vacation.
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
