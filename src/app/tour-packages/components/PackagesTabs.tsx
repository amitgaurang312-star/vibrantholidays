'use client';

import React, { useState, useEffect, useRef } from 'react';

import AppImage from '@/components/ui/AppImage';

const categories = [
'All',
'Family Tours',
'Honeymoon',
'Adventure',
'Luxury',
'Group Tours',
'Weekend Trips',
'International',
'Domestic'];


interface Package {
  id: string;
  name: string;
  location: string;
  image: string;
  alt: string;
  duration: string;
  price: string;
  originalPrice?: string;
  category: string[];
  highlights: string[];
  rating: number;
  reviews: number;
  badge?: string;
}

const packages: Package[] = [
{
  id: 'kashmir-family',
  name: 'Kashmir Family Delight',
  location: 'Kashmir, India',
  image: "https://images.unsplash.com/photo-1647285467394-11b01f4e16b7",
  alt: 'Kashmir snow mountains with frozen lake in dim overcast light, dark pine forest in foreground',
  duration: '6 Days / 5 Nights',
  price: '₹22,000',
  originalPrice: '₹28,000',
  category: ['All', 'Family Tours', 'Domestic'],
  highlights: ['Dal Lake Shikara', 'Gulmarg Gondola', 'Pahalgam Valley', 'Houseboat Stay'],
  rating: 4.9,
  reviews: 42,
  badge: 'Best Seller'
},
{
  id: 'maldives-honeymoon',
  name: 'Maldives Bliss',
  location: 'Maldives',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10eb8dfdc-1772250254542.png",
  alt: 'Maldives overwater villa at sunset with dark turquoise water and golden horizon light',
  duration: '5 Days / 4 Nights',
  price: '₹78,000',
  category: ['All', 'Honeymoon', 'Luxury', 'International'],
  highlights: ['Water Villa', 'Sunset Cruise', 'Snorkeling', 'Candlelit Dinner'],
  rating: 5.0,
  reviews: 31,
  badge: 'Most Popular'
},
{
  id: 'bali-adventure',
  name: 'Bali Adventure Escape',
  location: 'Bali, Indonesia',
  image: "https://images.unsplash.com/photo-1583085529301-f917abadb5c2",
  alt: 'Bali jungle rice terraces in deep green shadow with dark volcanic hillside at dusk',
  duration: '6 Days / 5 Nights',
  price: '₹48,000',
  category: ['All', 'Adventure', 'International'],
  highlights: ['White Water Rafting', 'Mount Batur Sunrise', 'Uluwatu Cliff', 'Cooking Class'],
  rating: 4.8,
  reviews: 28
},
{
  id: 'kerala-honeymoon',
  name: 'Kerala Romantic Retreat',
  location: 'Kerala, India',
  image: "https://images.unsplash.com/photo-1584906608816-1089f128b201",
  alt: 'Kerala houseboat on backwaters at dusk with dark water reflections and dim golden light',
  duration: '5 Days / 4 Nights',
  price: '₹18,000',
  category: ['All', 'Honeymoon', 'Domestic'],
  highlights: ['Houseboat Stay', 'Munnar Tea Gardens', 'Alleppey Backwaters', 'Ayurveda Spa'],
  rating: 4.9,
  reviews: 37,
  badge: 'Top Rated'
},
{
  id: 'dubai-luxury',
  name: 'Dubai Luxury Getaway',
  location: 'Dubai, UAE',
  image: "https://images.unsplash.com/photo-1630210414374-70a0439e286c",
  alt: 'Dubai Burj Khalifa at night against dark blue sky with bright city lights below',
  duration: '5 Days / 4 Nights',
  price: '₹58,000',
  category: ['All', 'Luxury', 'International'],
  highlights: ['Burj Khalifa 124th Floor', 'Desert Safari', 'Dhow Cruise', 'Dubai Mall'],
  rating: 4.8,
  reviews: 45,
  badge: 'Premium'
},
{
  id: 'himachal-adventure',
  name: 'Himachal Adventure Trek',
  location: 'Himachal Pradesh, India',
  image: "https://images.unsplash.com/photo-1631601371386-bfebd1cb9622",
  alt: 'Himachal Pradesh mountain trekking trail in dark overcast day with snow peaks in background',
  duration: '7 Days / 6 Nights',
  price: '₹19,000',
  category: ['All', 'Adventure', 'Domestic'],
  highlights: ['Rohtang Pass', 'Triund Trek', 'River Rafting', 'Camping'],
  rating: 4.7,
  reviews: 22
},
{
  id: 'thailand-group',
  name: 'Thailand Group Tour',
  location: 'Thailand',
  image: "https://images.unsplash.com/photo-1583235850379-5be46fe06642",
  alt: 'Thailand Phi Phi islands at dusk with dark sea and shadowy limestone cliffs',
  duration: '7 Days / 6 Nights',
  price: '₹42,000',
  category: ['All', 'Group Tours', 'International'],
  highlights: ['Bangkok Temples', 'Phi Phi Island', 'Floating Market', 'Pattaya'],
  rating: 4.8,
  reviews: 38,
  badge: 'Group Special'
},
{
  id: 'goa-weekend',
  name: 'Goa Weekend Escape',
  location: 'Goa, India',
  image: "https://images.unsplash.com/photo-1607848008221-bd924ef9c593",
  alt: 'Goa beach at twilight with dark ocean waves and silhouetted palm trees against orange sky',
  duration: '3 Days / 2 Nights',
  price: '₹9,500',
  category: ['All', 'Weekend Trips', 'Domestic'],
  highlights: ['Baga Beach', 'Dudhsagar Falls', 'Old Goa Churches', 'Night Market'],
  rating: 4.6,
  reviews: 56,
  badge: 'Quick Escape'
},
{
  id: 'singapore-malaysia',
  name: 'Singapore–Malaysia Explorer',
  location: 'Singapore & Malaysia',
  image: "https://images.unsplash.com/photo-1717323269399-5e6bab11a408",
  alt: 'Petronas Twin Towers Kuala Lumpur at night with dark sky and glowing city lights below',
  duration: '8 Days / 7 Nights',
  price: '₹68,000',
  category: ['All', 'International', 'Family Tours'],
  highlights: ['Petronas Towers', 'Marina Bay Sands', 'Universal Studios', 'Gardens by the Bay'],
  rating: 4.9,
  reviews: 19
}];


export default function PackagesTabs() {
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filtered = packages.filter((p) => p.category.includes(activeCategory));

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Category Tabs */}
        <div className={`mb-10 overflow-x-auto pb-2 reveal-up ${visible ? 'active' : ''}`}>
          <div className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat
                    ? 'text-white shadow-teal'
                    : 'bg-white border border-border/60 text-muted-foreground hover:border-primary hover:text-primary'
                }`}
                style={activeCategory === cat ? { background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className={`text-muted-foreground text-sm mb-8 reveal-up ${visible ? 'active' : ''}`}>
          Showing <span className="text-primary font-semibold">{filtered.length}</span> packages
          {activeCategory !== 'All' && <> in <span className="text-foreground font-medium">{activeCategory}</span></>}
        </p>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg, i) => (
            <div
              key={pkg.id}
              className={`reveal-scale ${visible ? 'active' : ''} group bg-white rounded-3xl overflow-hidden border border-border/60 card-hover`}
              style={{ transitionDelay: `${i * 60}ms`, boxShadow: '0 4px 24px rgba(13,27,42,0.06)' }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <AppImage
                  src={pkg.image}
                  alt={pkg.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {pkg.badge && (
                  <span className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
                    {pkg.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 glass-panel text-white text-xs font-medium px-2.5 py-1 rounded-full">
                  {pkg.duration}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="text-muted-foreground text-xs font-medium mb-1 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {pkg.location}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug">{pkg.name}</h3>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0 px-2 py-1 rounded-lg" style={{ background: '#EEF3F8' }}>
                    <svg className="w-3.5 h-3.5 text-accent" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-foreground text-xs font-bold">{pkg.rating}</span>
                    <span className="text-muted-foreground text-xs">({pkg.reviews})</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 my-3">
                  {pkg.highlights.slice(0, 3).map((h) =>
                <span key={h} className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                      {h}
                    </span>
                )}
                  {pkg.highlights.length > 3 &&
                <span className="bg-muted text-muted-foreground text-xs px-2.5 py-1 rounded-full">
                      +{pkg.highlights.length - 3} more
                    </span>
                }
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <a
                    href="tel:+918668355974"
                    className="flex items-center gap-2 w-full justify-center text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #0B8A8F, #067A7F)' }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
                    </svg>
                    Call to Enquire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>);

}