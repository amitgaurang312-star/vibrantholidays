'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface DepartureDate {
  date: string;
  month: string;
}

const departureDates: DepartureDate[] = [
{ date: '25 Jul 2025', month: 'July 2025' },
{ date: '01 Aug 2025', month: 'August 2025' },
{ date: '05 Aug 2025', month: 'August 2025' },
{ date: '08 Aug 2025', month: 'August 2025' },
{ date: '12 Aug 2025', month: 'August 2025' },
{ date: '15 Aug 2025', month: 'August 2025' },
{ date: '19 Aug 2025', month: 'August 2025' },
{ date: '22 Aug 2025', month: 'August 2025' },
{ date: '29 Aug 2025', month: 'August 2025' },
{ date: '02 Sep 2025', month: 'September 2025' },
{ date: '05 Sep 2025', month: 'September 2025' },
{ date: '09 Sep 2025', month: 'September 2025' },
{ date: '12 Sep 2025', month: 'September 2025' },
{ date: '16 Sep 2025', month: 'September 2025' },
{ date: '19 Sep 2025', month: 'September 2025' },
{ date: '23 Sep 2025', month: 'September 2025' },
{ date: '26 Sep 2025', month: 'September 2025' },
{ date: '30 Sep 2025', month: 'September 2025' },
{ date: '03 Oct 2025', month: 'October 2025' },
{ date: '10 Oct 2025', month: 'October 2025' },
{ date: '14 Oct 2025', month: 'October 2025' }];


const itinerary = [
{
  day: 'Day 1',
  title: 'Touchdown Phuket – Let the Holiday Begin!',
  points: [
  'Arrive at Phuket Airport; meet the team for a smooth transfer to hotel.',
  'Check in, relax, and soak in the tropical vibes.',
  'Overnight stay at Best Western Patong, Phuket.']

},
{
  day: 'Day 2',
  title: 'Phi Phi Island Adventure',
  points: [
  'Breakfast at hotel.',
  'Full-day Phi Phi Island Tour with Lunch (SIC).',
  'Return to hotel; overnight stay at Phuket.']

},
{
  day: 'Day 3',
  title: 'Phuket to Krabi – New Views Await',
  points: [
  'Post breakfast, check out and transfer to Krabi.',
  'Phuket City Tour en route.',
  'Check in at Apple A Day, Krabi and relax.',
  'Overnight stay at Krabi.']

},
{
  day: 'Day 4',
  title: 'Krabi 4 Island Hopping',
  points: [
  'Breakfast at hotel.',
  'Full-day Krabi 4 Island Tour with Lunch (SIC).',
  'Return to hotel; overnight stay at Krabi.']

},
{
  day: 'Day 5',
  title: 'Farewell Thailand',
  points: [
  'Breakfast at hotel.',
  'Check out and transfer to Phuket Airport for return flight.',
  'Depart with wonderful memories!']

}];


const inclusions = [
'Non-stop Direct Akasa Air Flights (Ex-Mumbai) – Roundtrip',
'2 Nights Phuket – Best Western Patong (4 Star, Superior Room)',
'2 Nights Krabi – Apple A Day (4 Star, Deluxe Room)',
'Phi Phi Island Tour with Lunch (SIC) – NPF excluded',
'Krabi 4 Island Tour with Lunch (SIC) – NPF excluded',
'Phuket City Tour (SIC)',
'Airport & inter-hotel transfers (SIC)',
'Free SIM Card + Free Travel Insurance',
'Daily Breakfast',
'4 Nights Stay'];


const exclusions = [
'National Park Fee (NPF) for Phi Phi & Krabi 4 Island tours',
'Personal expenses (laundry, tips, shopping, minibar, etc.)',
'Meals not mentioned in inclusions',
'Any service not explicitly mentioned under inclusions'];


const months = [...new Set(departureDates.map((d) => d.month))];

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
            Fixed Departures – Thailand
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            4N Thailand <span className="text-gradient-gold">Phuket & Krabi</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            5 Days / 4 Nights · Non-stop Akasa Air flights from Mumbai · Minimum 2 Adults
          </p>
        </div>

        {/* Hero Package Card */}
        <div className={`reveal-up ${visible ? 'active' : ''} mb-16`}>
          <div className="bg-white rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.10)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-72 overflow-hidden">
                <AppImage
                  src="https://images.unsplash.com/photo-1695061077264-1ec103d68b3d"
                  alt="Thailand Phi Phi islands turquoise water with limestone cliffs and tropical beach"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center" />
                
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.3) 0%, transparent 60%)' }} />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
                    Fixed Departure
                  </span>
                  <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 2px 8px rgba(11,138,143,0.4)' }}>
                    5 Days / 4 Nights
                  </span>
                </div>
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-muted-foreground text-sm font-medium mb-1 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Phuket & Krabi, Thailand
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">4N Thailand – Phuket & Krabi Package</h3>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-6">
                    <p className="text-4xl font-bold text-primary">₹65,000</p>
                    <p className="text-muted-foreground text-sm mb-1">/ person (min. 2 adults)</p>
                  </div>

                  {/* Flight Info */}
                  <div className="rounded-2xl p-4 mb-5" style={{ background: 'rgba(11,138,143,0.06)', border: '1px solid rgba(11,138,143,0.12)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">✈ Flight Details (Akasa Air)</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Onward · QP 618</p>
                        <p className="font-semibold text-foreground">Mumbai → Phuket</p>
                        <p className="text-muted-foreground text-xs">Dep. 06:20 AM · Non-stop</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Return · QP 619</p>
                        <p className="font-semibold text-foreground">Phuket → Mumbai</p>
                        <p className="text-muted-foreground text-xs">Dep. 01:50 PM · Non-stop</p>
                      </div>
                    </div>
                  </div>

                  {/* Hotels */}
                  <div className="rounded-2xl p-4 mb-5" style={{ background: 'rgba(200,134,14,0.06)', border: '1px solid rgba(200,134,14,0.12)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C8860E' }}>🏨 Hotel Accommodation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Best Western Patong ⭐⭐⭐⭐</p>
                        <p className="text-muted-foreground text-xs">Phuket · 2 Nights · Superior Room</p>
                        <p className="text-muted-foreground text-xs">Breakfast Included</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Apple A Day ⭐⭐⭐⭐</p>
                        <p className="text-muted-foreground text-xs">Krabi · 2 Nights · Deluxe Room</p>
                        <p className="text-muted-foreground text-xs">Breakfast Included</p>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+918668355974"
                  className="inline-flex items-center justify-center gap-2 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #0B8A8F, #067A7F)' }}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Departure Dates by Month */}
        <div className={`reveal-up ${visible ? 'active' : ''} mb-16`}>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Available <span className="text-gradient-gold">Departure Dates</span>
          </h3>
          <p className="text-center text-muted-foreground text-sm mb-8">Seats available on first-come, first-served basis</p>

          {months.map((month) =>
          <div key={month} className="mb-10">
              {/* Month Label */}
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,138,143,0.25))' }} />
                <span className="px-5 py-2 rounded-full text-white text-sm font-semibold tracking-wide" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 16px rgba(11,138,143,0.35)' }}>
                  {month}
                </span>
                <div className="h-px flex-1" style={{ background: 'linear-gradient(90deg, rgba(11,138,143,0.25), transparent)' }} />
              </div>

              {/* Date Chips */}
              <div className="flex flex-wrap gap-3 justify-center">
                {departureDates.
              filter((d) => d.month === month).
              map((dep) =>
              <div
                key={dep.date}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-border/60 hover:border-primary/40 transition-all duration-200 hover:shadow-md"
                style={{ boxShadow: '0 2px 12px rgba(13,27,42,0.06)' }}>
                
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-foreground font-semibold text-sm">{dep.date}</span>
                    </div>
              )}
              </div>
            </div>
          )}
        </div>

        {/* Itinerary */}
        <div className={`reveal-up ${visible ? 'active' : ''} mb-16`}>
          <h3 className="font-display text-2xl font-semibold text-foreground mb-8 text-center">
            Day-by-Day <span className="text-gradient-gold">Itinerary</span>
          </h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 hidden sm:block" style={{ background: 'linear-gradient(180deg, #0B8A8F, #0ABBC2, transparent)' }} />
            <div className="space-y-6">
              {itinerary.map((item, i) =>
              <div key={i} className="flex gap-6">
                  {/* Day badge */}
                  <div className="flex-shrink-0 hidden sm:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xs font-bold z-10" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 16px rgba(11,138,143,0.35)' }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-5 border border-border/60" style={{ boxShadow: '0 2px 16px rgba(13,27,42,0.06)' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="sm:hidden inline-flex items-center justify-center w-8 h-8 rounded-full text-white text-xs font-bold flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}>{i + 1}</span>
                      <div>
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider">{item.day}</p>
                        <h4 className="font-display text-base font-semibold text-foreground">{item.title}</h4>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {item.points.map((pt, j) =>
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          {pt}
                        </li>
                    )}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Inclusions & Exclusions */}
        <div className={`reveal-up ${visible ? 'active' : ''} mb-16`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inclusions */}
            <div className="bg-white rounded-3xl p-7 border border-border/60" style={{ boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(11,138,143,0.12)' }}>
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">What's Included</h4>
              </div>
              <ul className="space-y-3">
                {inclusions.map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(11,138,143,0.10)' }}>
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                )}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-white rounded-3xl p-7 border border-border/60" style={{ boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(239,68,68,0.10)' }}>
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h4 className="font-display text-lg font-semibold text-foreground">What's Not Included</h4>
              </div>
              <ul className="space-y-3">
                {exclusions.map((item, i) =>
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: 'rgba(239,68,68,0.08)' }}>
                      <svg className="w-3 h-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    {item}
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className={`reveal-up ${visible ? 'active' : ''}`}>
          <div className="rounded-3xl p-8 lg:p-12 text-center text-white" style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 100%)', boxShadow: '0 8px 40px rgba(11,138,143,0.35)' }}>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">Limited Seats Available</p>
            <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-3">Ready to Explore Thailand?</h3>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
              Seats fill up fast on a first-come, first-served basis. Book your spot today for just ₹65,000/person.
            </p>
            <a
              href="tel:+918668355974"
              className="inline-flex items-center gap-2 bg-white font-semibold px-8 py-3.5 rounded-full text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              style={{ color: '#0B8A8F' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>

      </div>
    </section>);

}