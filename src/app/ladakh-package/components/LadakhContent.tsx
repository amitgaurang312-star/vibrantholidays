'use client';

import React, { useState, useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

interface DepartureDate {
  date: string;
  month: string;
}

const departureDates: DepartureDate[] = [
{ date: '28 Sep 2025', month: 'September 2025' }];


const itinerary = [
{
  day: 'Day 1',
  title: 'Arrival in Leh – Acclimatize & Rest',
  points: [
  'Transfer from Leh Airport to hotel for check-in.',
  'Full day free for leisure & acclimatization — your body needs time to adjust to the high altitude.',
  'Explore the local market at your own pace if feeling well.',
  'Overnight stay at hotel in Leh.']

},
{
  day: 'Day 2',
  title: 'Leh Sightseeing – Monasteries, Magnetic Hill & Sangam',
  points: [
  'After breakfast, half-day excursion covering Spituk Monastery.',
  'Visit the Hall of Fame — a museum dedicated to Indian Army soldiers.',
  'Stop at Gurudwara Pathar Sahib, a sacred Sikh shrine.',
  'Experience the famous Magnetic Hill where vehicles appear to roll uphill.',
  'Witness the breathtaking Sangam View — confluence of the Indus & Zanskar Rivers.',
  'Explore Leh Market and the historic Leh Palace.',
  'Visit Shanti Stupa for panoramic views of Leh valley.',
  'Overnight stay in Leh.']

},
{
  day: 'Day 3',
  title: 'Leh → Khardung La → Nubra Valley',
  points: [
  'Early breakfast, then drive to Nubra Valley via the legendary Khardung La Pass.',
  'Khardung La at 18,380 ft is one of the highest motorable roads in the world.',
  'Visit the ancient Diskit Monastery perched on a hilltop.',
  'Arrive at Hunder; check into hotel/camp.',
  'Enjoy a thrilling Camel Ride on the Sand Dunes of Hunder.',
  'Dinner & overnight stay at hotel/camp in Nubra.']

},
{
  day: 'Day 4',
  title: 'Nubra → Turtuk – The Last Indian Village',
  points: [
  'After breakfast, drive to Turtuk — the last village on the Indian side of the border.',
  'Turtuk was opened to tourists only in 2010 after the Kargil War.',
  'Explore the unique Balti culture, ancient apricot orchards, and warm local hospitality.',
  'Walk through the narrow lanes and interact with the friendly villagers.',
  'Return to Nubra Valley. Overnight stay at hotel in Nubra.']

},
{
  day: 'Day 5',
  title: 'Nubra Valley → Pangong Lake',
  points: [
  'After breakfast, drive to Pangong Lake via the scenic Shyok, Durbuk, and Tangste villages.',
  'Pangong Lake lies at an altitude of 4,350 m in the Changthang region, east of Leh.',
  'The lake is famous for changing colour 4–5 times a day — from deep blue to turquoise to green.',
  'Approximately 60% of the lake lies in Tibet (China).',
  'Evening: breathtaking views of Pangong Lake at sunset.',
  'Overnight stay at camp on the lakeside.']

},
{
  day: 'Day 6',
  title: 'Pangong Lake → Hanle – Dark Sky Reserve',
  points: [
  'After breakfast, drive to Hanle via Chang La Pass.',
  'Visit the historic Hanle Monastery, one of the oldest monasteries in Ladakh.',
  'Explore the vast Changthang Plateau — home to Tibetan wildlife including Kiang and Tibetan antelope.',
  'Hanle is home to the Indian Astronomical Observatory, one of the highest in the world.',
  'Night stay in Hanle — ideal for stargazing in one of India\'s darkest skies.']

},
{
  day: 'Day 7',
  title: 'Hanle → Leh – Monasteries & Heritage',
  points: [
  'After breakfast, drive back to Leh with sightseeing en route.',
  'Visit Nyoma and Chumathang villages along the way.',
  'Stop at the majestic Shey Palace, the former summer palace of the Kings of Ladakh.',
  'Visit Thiksey Monastery — often compared to the Potala Palace in Lhasa, Tibet.',
  'See the famous Rancho School (Druk Padma Karpo School) from the Bollywood film 3 Idiots.',
  'Relax at Sindhu Ghat on the banks of the Indus River. Night stay in Leh.']

},
{
  day: 'Day 8',
  title: 'Leh Airport Drop – Journey Ends',
  points: [
  'After breakfast, check out from hotel.',
  'Transfer from Leh hotel to Leh Airport.',
  'Trip ends with memories that will last a lifetime.']

}];


const inclusions = [
'Leh Airport Pickup & Drop',
'Welcome Drink on Arrival',
'3 Nights accommodation in Leh (double occupancy)',
'2 Nights accommodation in Nubra (double occupancy)',
'1 Night accommodation in Pangong (double occupancy)',
'1 Night accommodation in Hanle (double occupancy)',
'7 Daily Breakfasts & Dinners (Buffet)',
'Inner Line Permit',
'Non-AC Innova / Scorpio / Xylo / Tempo Traveller as per itinerary'];


const exclusions = [
'Airfare / Train fares to and from Leh',
'Oxygen cylinder (available on rent)',
'Entrance fees for Monuments, Monasteries & Museums',
'Guide fees & Camera fees',
'Rafting / Camel Safari charges',
'Any kind of drinks (Alcoholic, Mineral, Aerated)',
'Personal expenses (tips, laundry, telephone calls, etc.)',
'Costs from itinerary changes due to personal reasons',
'Expenses due to events beyond control (bad weather, natural calamities, flight delays, etc.)',
'Anything not specifically mentioned under Package Cost Inclusions',
'Extra transport expenses',
'Room service & additional meals',
'Medical & Travel Insurance'];


const months = [...new Set(departureDates.map((d) => d.month))];

export default function LadakhContent() {
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
            Fixed Departure – Ladakh
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            7N Ladakh <span className="text-gradient-gold">Group Trip</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            8 Days / 7 Nights · Leh · Nubra · Turtuk · Pangong · Hanle · Minimum 2 Adults
          </p>
        </div>

        {/* Hero Package Card */}
        <div className={`reveal-up ${visible ? 'active' : ''} mb-16`}>
          <div className="bg-white rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.10)' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-72 lg:h-auto min-h-72 overflow-hidden">
                <AppImage
                  src="https://images.unsplash.com/photo-1660483033464-68ab6fb8b10c"
                  alt="Pangong Lake Ladakh with snow-capped Himalayan mountains and crystal blue water"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center" />

                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.3) 0%, transparent 60%)' }} />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
                    Fixed Departure
                  </span>
                  <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 2px 8px rgba(11,138,143,0.4)' }}>
                    8 Days / 7 Nights
                  </span>
                  <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #1a5276, #2980b9)', boxShadow: '0 2px 8px rgba(26,82,118,0.4)' }}>
                    Group Trip
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
                    Leh · Nubra · Turtuk · Pangong · Hanle, Ladakh
                  </p>
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4">7 Nights Ladakh Group Trip Package</h3>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-6">
                    <p className="text-4xl font-bold text-primary">₹24,999</p>
                    <p className="text-muted-foreground text-sm mb-1">/ person (double occupancy)</p>
                  </div>

                  {/* Departure Info */}
                  <div className="rounded-2xl p-4 mb-5" style={{ background: 'rgba(11,138,143,0.06)', border: '1px solid rgba(11,138,143,0.12)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">📅 Departure Details</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Departure Date</p>
                        <p className="font-semibold text-foreground">28 September 2025</p>
                        <p className="text-muted-foreground text-xs">Leh Airport Pickup</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground text-xs mb-0.5">Return Date</p>
                        <p className="font-semibold text-foreground">5 October 2025</p>
                        <p className="text-muted-foreground text-xs">Leh Airport Drop</p>
                      </div>
                    </div>
                  </div>

                  {/* Hotels */}
                  <div className="rounded-2xl p-4 mb-5" style={{ background: 'rgba(200,134,14,0.06)', border: '1px solid rgba(200,134,14,0.12)' }}>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#C8860E' }}>🏨 Hotel Accommodation</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Leh · 3 Nights</p>
                        <p className="text-muted-foreground text-xs">Hotel Sindhu Residency / Holiday Ladakh / Welkin High or Similar</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Nubra · 2 Nights</p>
                        <p className="text-muted-foreground text-xs">The Latsas / Ldazes Camp / Hotel Thachung or Similar</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Pangong · 1 Night</p>
                        <p className="text-muted-foreground text-xs">Mystic Mountain Cottage / The Golden Cottage or Similar</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Hanle · 1 Night</p>
                        <p className="text-muted-foreground text-xs">Sonam Homestay / Dark Sky Homestay or Similar</p>
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
                <h4 className="font-display text-lg font-semibold text-foreground">What&apos;s Included</h4>
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
                <h4 className="font-display text-lg font-semibold text-foreground">What&apos;s Not Included</h4>
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
            <h3 className="font-display text-3xl lg:text-4xl font-semibold mb-3">Ready to Explore Ladakh?</h3>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
              Seats fill up fast on a first-come, first-served basis. Book your spot today for just ₹24,999/person.
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