'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import AppImage from '@/components/ui/AppImage';
import Link from 'next/link';

const itinerary = [
{
  day: 'Day 01',
  title: 'Arrival in Leh – Acclimatize & Rest',
  location: 'Leh',
  highlights: ['Airport Transfer', 'Acclimatization', 'Leisure Day'],
  points: [
  'Transfer from Leh Airport to hotel for check-in.',
  'Full day free for leisure & acclimatization — your body needs time to adjust to the high altitude.',
  'Explore the local market at your own pace if feeling well.',
  'Overnight stay at hotel in Leh.'],

  overnight: 'Leh',
  meals: 'Dinner'
},
{
  day: 'Day 02',
  title: 'Leh Sightseeing – Monasteries, Magnetic Hill & Sangam',
  location: 'Leh',
  highlights: ['Spituk Monastery', 'Hall of Fame', 'Magnetic Hill', 'Sangam View'],
  points: [
  'After breakfast, half-day excursion covering Spituk Monastery.',
  'Visit the Hall of Fame — a museum dedicated to Indian Army soldiers.',
  'Stop at Gurudwara Pathar Sahib, a sacred Sikh shrine.',
  'Experience the famous Magnetic Hill where vehicles appear to roll uphill.',
  'Witness the breathtaking Sangam View — confluence of the Indus & Zanskar Rivers.',
  'Explore Leh Market and the historic Leh Palace.',
  'Visit Shanti Stupa for panoramic views of Leh valley.',
  'Drive back to hotel in the afternoon.',
  'Overnight stay in Leh.'],

  overnight: 'Leh',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 03',
  title: 'Leh → Khardung La → Nubra Valley',
  location: 'Nubra Valley',
  highlights: ['Khardung La Pass (18,380 ft)', 'Diskit Monastery', 'Camel Ride on Sand Dunes'],
  points: [
  'Early breakfast, then drive to Nubra Valley via the legendary Khardung La Pass.',
  'Khardung La at 18,380 ft is one of the highest motorable roads in the world — a truly epic crossing.',
  'Visit the ancient Diskit Monastery perched on a hilltop.',
  'Arrive at Hunder; check into hotel/camp.',
  'Explore Diskit Village and its unique Ladakhi culture.',
  'Enjoy a thrilling Camel Ride on the Sand Dunes of Hunder — a surreal desert experience in the mountains.',
  'Dinner & overnight stay at hotel/camp in Nubra.'],

  overnight: 'Nubra',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 04',
  title: 'Nubra → Turtuk – The Last Indian Village',
  location: 'Nubra Valley',
  highlights: ['Turtuk Border Village', 'Balti Culture', 'Scenic Drive'],
  points: [
  'After breakfast, drive to Turtuk — the last village on the Indian side of the border.',
  'Turtuk was taken over by India during the Kargil War and opened to tourists only in 2010.',
  'Explore the unique Balti culture, ancient apricot orchards, and the warm hospitality of the locals.',
  'Walk through the narrow lanes and interact with the friendly villagers.',
  'Return to Nubra Valley.',
  'Overnight stay at hotel in Nubra.'],

  overnight: 'Nubra',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 05',
  title: 'Nubra Valley → Pangong Lake',
  location: 'Pangong Lake',
  highlights: ['Shyok Valley Drive', 'Pangong Tso', 'Colour-Changing Lake'],
  points: [
  'After breakfast, drive to Pangong Lake via the scenic Shyok, Durbuk, and Tangste villages.',
  'Pangong Lake lies in the Changthang region, east of Leh, at an altitude of 4,350 m.',
  'The lake is famous for changing colour 4–5 times a day — from deep blue to turquoise to green.',
  'Approximately 60% of the lake lies in Tibet (China).',
  'Evening: breathtaking views of Pangong Lake at sunset.',
  'Overnight stay at camp on the lakeside.'],

  overnight: 'Pangong',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 06',
  title: 'Pangong Lake → Hanle – Dark Sky Reserve',
  location: 'Hanle',
  highlights: ['Chang La Pass', 'Hanle Monastery', 'Changthang Plateau', 'Stargazing'],
  points: [
  'After breakfast, drive to Hanle via Chang La Pass.',
  'Visit the historic Hanle Monastery, one of the oldest monasteries in Ladakh.',
  'Explore the vast Changthang Plateau — home to Tibetan wildlife including Kiang (wild ass) and Tibetan antelope.',
  'Hanle is home to the Indian Astronomical Observatory, one of the highest in the world.',
  'Night stay in Hanle — ideal for stargazing in one of India\'s darkest skies.'],

  overnight: 'Hanle',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 07',
  title: 'Hanle → Leh – Monasteries & Heritage',
  location: 'Leh',
  highlights: ['Thiksey Monastery', 'Rancho School', 'Shey Palace', 'Sindhu Ghat'],
  points: [
  'After breakfast, drive back to Leh with sightseeing en route.',
  'Visit Nyoma and Chumathang villages along the way.',
  'Stop at the majestic Shey Palace, the former summer palace of the Kings of Ladakh.',
  'Visit Thiksey Monastery — often compared to the Potala Palace in Lhasa, Tibet.',
  'See the famous Rancho School (Druk Padma Karpo School) from the Bollywood film 3 Idiots.',
  'Relax at Sindhu Ghat on the banks of the Indus River.',
  'Night stay in Leh.'],

  overnight: 'Leh',
  meals: 'Breakfast & Dinner'
},
{
  day: 'Day 08',
  title: 'Leh Airport Drop – Journey Ends',
  location: 'Leh Airport',
  highlights: ['Departure', 'Airport Transfer'],
  points: [
  'After breakfast, check out from hotel.',
  'Transfer from Leh hotel to Leh Airport.',
  'Trip ends with memories that will last a lifetime.'],

  overnight: '',
  meals: 'Breakfast'
}];


const hotels = [
{ destination: 'Leh', nights: 3, options: 'Hotel Sindhu Residency / Hotel Holiday Ladakh / Welkin High / The Nangsay Hotel or Similar', icon: '🏨' },
{ destination: 'Nubra', nights: 2, options: 'The Latsas / Ldazes Camp / Hotel Thachung / Ladakh Heaven Hills / Paradise North or Similar', icon: '🏕️' },
{ destination: 'Pangong', nights: 1, options: 'Mystic Mountain Cottage / The Golden Cottage / LakeTso House Pangong', icon: '⛺' },
{ destination: 'Hanle', nights: 1, options: 'Sonam Homestay / Dark Sky Homestay / Gua Homestay', icon: '🏡' }];


const inclusions = [
{ icon: '✈️', text: 'Leh Airport Pickup & Drop' },
{ icon: '🥤', text: 'Welcome Drink on Arrival' },
{ icon: '🏨', text: '3 Nights accommodation in Leh (double occupancy)' },
{ icon: '🏕️', text: '2 Nights accommodation in Nubra (double occupancy)' },
{ icon: '⛺', text: '1 Night accommodation in Pangong (double occupancy)' },
{ icon: '🏡', text: '1 Night accommodation in Hanle (double occupancy)' },
{ icon: '🍽️', text: '7 Daily Breakfasts & Dinners (Buffet)' },
{ icon: '📜', text: 'Inner Line Permit' },
{ icon: '🚙', text: 'Non-AC Innova / Scorpio / Xylo / Tempo Traveller as per itinerary' }];


const exclusions = [
'Airfare / Train fares to and from Leh',
'Oxygen cylinder (available on rent)',
'Entrance fees for Monuments, Monasteries & Museums',
'Guide fees & Camera fees',
'Rafting / Camel Safari charges',
'Any kind of drinks (Alcoholic, Mineral, Aerated)',
'Personal expenses (tips, laundry, telephone calls, etc.)',
'Costs from itinerary changes due to personal reasons',
'Expenses due to events beyond control (bad weather, natural calamities, flight delays, accidents, etc.)',
'Anything not specifically mentioned under Package Cost Inclusions',
'Extra transport expenses',
'Room service & additional meals',
'Medical & Travel Insurance'];


const highlights = [
{ icon: '🏔️', title: 'Khardung La Pass', desc: '18,380 ft — one of the highest motorable roads in the world' },
{ icon: '🐫', title: 'Camel Ride', desc: 'Unique camel safari on the sand dunes of Hunder, Nubra Valley' },
{ icon: '💙', title: 'Pangong Lake', desc: 'Iconic colour-changing lake at 4,350 m altitude' },
{ icon: '🏘️', title: 'Turtuk Village', desc: 'Last Indian village on the border — rare Balti culture' },
{ icon: '🌌', title: 'Hanle Dark Sky', desc: 'India\'s premier stargazing destination — minimal light pollution' },
{ icon: '🛕', title: 'Ancient Monasteries', desc: 'Thiksey, Diskit, Spituk, Hanle — centuries of Buddhist heritage' }];


export default function LadakhPackagePage() {
  const [visible, setVisible] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
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
    <>
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <AppImage
              src="https://images.unsplash.com/photo-1563533140099-b1d2fe5296e1"
              alt="Pangong Lake Ladakh with snow-capped mountains reflecting in the deep blue water"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority />

            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(13,27,42,0.3) 0%, rgba(13,27,42,0.5) 50%, rgba(13,27,42,0.85) 100%)' }} />
          </div>

          {/* Floating badges */}
          <div className="absolute top-8 left-4 sm:left-8 flex flex-col gap-2 z-10">
            <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
              Fixed Departure
            </span>
            <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 2px 8px rgba(11,138,143,0.4)' }}>
              7 Nights / 8 Days
            </span>
            <span className="text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #1a5276, #2980b9)', boxShadow: '0 2px 8px rgba(26,82,118,0.4)' }}>
              Group Trip
            </span>
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 pb-12 lg:pb-16">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#F0BC4A' }}>
                Vibrant Holidays Presents
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                7 Nights Ladakh<br />
                <span style={{ color: '#F0BC4A' }}>Group Trip</span>
              </h1>
              <p className="text-white/80 text-lg mb-6 max-w-xl">
                Leh · Nubra Valley · Turtuk · Pangong Lake · Hanle
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                  <p className="text-white/60 text-xs mb-0.5">Departure Date</p>
                  <p className="text-white font-bold text-lg">28 Sep – 5 Oct</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                  <p className="text-white/60 text-xs mb-0.5">Package Price</p>
                  <p className="font-bold text-2xl" style={{ color: '#F0BC4A' }}>₹24,999<span className="text-white/60 text-sm font-normal">/person</span></p>
                </div>
                <a
                  href="tel:+918668355974"
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ background: 'linear-gradient(135deg, #0B8A8F, #067A7F)' }}>

                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Package Highlights */}
        <section ref={sectionRef} className="py-14 lg:py-20" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`text-center mb-12 reveal-up ${visible ? 'active' : ''}`}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Trip Highlights
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                What Makes This Trip <span className="text-gradient-gold">Unforgettable</span>
              </h2>
            </div>

            <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 reveal-up ${visible ? 'active' : ''}`}>
              {highlights?.map((h, i) =>
              <div
                key={i}
                className="bg-white rounded-2xl p-5 border border-border/60 hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: '0 4px 20px rgba(13,27,42,0.06)' }}>

                  <span className="text-3xl mb-3 block">{h?.icon}</span>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{h?.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{h?.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Hotels */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(200,134,14,0.10)', color: '#C8860E', border: '1px solid rgba(200,134,14,0.15)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#C8860E' }} />
                Accommodation
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                Where You'll <span className="text-gradient-gold">Stay</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">All accommodations are on double occupancy basis. Hotel names are indicative — similar properties may be substituted.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {hotels?.map((hotel, i) =>
              <div
                key={i}
                className="rounded-2xl p-6 border border-border/60 hover:-translate-y-1 transition-all duration-300"
                style={{ background: 'linear-gradient(135deg, #F7F9FC 0%, #FFFFFF 100%)', boxShadow: '0 4px 20px rgba(13,27,42,0.06)' }}>

                  <span className="text-3xl mb-3 block">{hotel?.icon}</span>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-foreground text-base">{hotel?.destination}</h3>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}>
                      {hotel?.nights}N
                    </span>
                  </div>
                  <p className="text-muted-foreground text-xs leading-relaxed">{hotel?.options}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Day-wise Itinerary */}
        <section className="py-14 lg:py-20" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                Day-wise Itinerary
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                Your <span className="text-gradient-gold">8-Day Journey</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Day Selector */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-2">
                  {itinerary?.map((item, i) =>
                  <button
                    key={i}
                    onClick={() => setActiveDay(i)}
                    className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 border ${activeDay === i ? 'border-primary/30 text-white' : 'border-border/60 text-foreground hover:border-primary/20 bg-white'}`}
                    style={activeDay === i ? { background: 'linear-gradient(135deg, #0B8A8F, #067A7F)', boxShadow: '0 4px 16px rgba(11,138,143,0.3)' } : {}}>

                      <div className="flex items-center justify-between">
                        <div>
                          <p className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${activeDay === i ? 'text-white/70' : 'text-primary'}`}>{item?.day}</p>
                          <p className={`text-sm font-semibold leading-tight ${activeDay === i ? 'text-white' : 'text-foreground'}`}>{item?.location}</p>
                        </div>
                        {item?.overnight &&
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${activeDay === i ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                            Overnight
                          </span>
                      }
                      </div>
                    </button>
                  )}
                </div>
              </div>

              {/* Day Detail */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.08)' }}>
                  {/* Day Header */}
                  <div className="p-6 pb-5" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.06) 0%, rgba(11,138,143,0.02) 100%)', borderBottom: '1px solid rgba(11,138,143,0.10)' }}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{itinerary?.[activeDay]?.day}</p>
                        <h3 className="font-display text-xl font-semibold text-foreground leading-tight">{itinerary?.[activeDay]?.title}</h3>
                      </div>
                      {itinerary?.[activeDay]?.meals &&
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(200,134,14,0.10)', color: '#C8860E', border: '1px solid rgba(200,134,14,0.15)' }}>
                          🍽️ {itinerary?.[activeDay]?.meals}
                        </span>
                      }
                    </div>

                    {/* Highlights chips */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {itinerary?.[activeDay]?.highlights?.map((h, i) =>
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                          {h}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Points */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {itinerary?.[activeDay]?.points?.map((point, i) =>
                      <li key={i} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(11,138,143,0.10)' }}>
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                          <p className="text-foreground text-sm leading-relaxed">{point}</p>
                        </li>
                      )}
                    </ul>

                    {itinerary?.[activeDay]?.overnight &&
                    <div className="mt-5 pt-5 border-t border-border/60 flex items-center gap-2">
                        <span className="text-sm">🌙</span>
                        <p className="text-sm text-muted-foreground">Overnight stay in <span className="font-semibold text-foreground">{itinerary?.[activeDay]?.overnight}</span></p>
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inclusions & Exclusions */}
        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                What's <span className="text-gradient-gold">Included & Excluded</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div className="rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}>
                <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, rgba(11,138,143,0.08) 0%, rgba(11,138,143,0.03) 100%)', borderBottom: '1px solid rgba(11,138,143,0.12)' }}>
                  <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm" style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}>✓</span>
                    Package Inclusions
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {inclusions?.map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span className="text-lg flex-shrink-0">{item?.icon}</span>
                        <p className="text-foreground text-sm leading-relaxed">{item?.text}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* Exclusions */}
              <div className="rounded-3xl overflow-hidden border border-border/60" style={{ boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}>
                <div className="px-6 py-5" style={{ background: 'linear-gradient(135deg, rgba(220,53,69,0.06) 0%, rgba(220,53,69,0.02) 100%)', borderBottom: '1px solid rgba(220,53,69,0.10)' }}>
                  <h3 className="font-display text-xl font-semibold text-foreground flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-sm" style={{ background: 'linear-gradient(135deg, #dc3545, #e74c3c)' }}>✕</span>
                    Package Exclusions
                  </h3>
                </div>
                <div className="p-6 bg-white">
                  <ul className="space-y-3">
                    {exclusions?.map((item, i) =>
                    <li key={i} className="flex items-start gap-3">
                        <span className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style={{ background: 'rgba(220,53,69,0.10)' }}>
                          <svg className="w-2.5 h-2.5" style={{ color: '#dc3545' }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing & CTA */}
        <section className="py-14 lg:py-20" style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #067A7F 50%, #055F63 100%)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-4">Limited Seats Available</p>
            <h2 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4">
              Book Your Ladakh Adventure
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              28 September – 5 October · 7 Nights / 8 Days · Group Trip
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-8 py-6 mb-8">
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Package Price</p>
                <p className="text-5xl font-bold text-white">₹24,999</p>
                <p className="text-white/60 text-sm">per person (double occupancy)</p>
              </div>
              <div className="hidden sm:block w-px h-16 bg-white/20" />
              <div className="text-center sm:text-left">
                <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Registration No.</p>
                <p className="text-white font-semibold text-sm">UDYAM-MH-26-1125371</p>
                <p className="text-white/60 text-xs mt-1">Vibrant Holidays</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918668355974"
                className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">

                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                Call to Book: +91 86683 55974
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5">

                Send Enquiry
              </Link>
            </div>

            <p className="text-white/50 text-xs mt-6">
              * Seats are limited and filled on first-come, first-served basis. Prices are subject to change without prior notice.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </>);

}