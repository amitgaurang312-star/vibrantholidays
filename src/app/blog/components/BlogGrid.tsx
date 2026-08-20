'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const posts: BlogPost[] = [
{
  id: 'kashmir-guide',
  title: 'The Ultimate Kashmir Travel Guide: Dal Lake to Gulmarg',
  excerpt: 'Everything you need to know about visiting Kashmir — the best time to go, must-visit spots, houseboat experience, and insider tips from our team who visits every season.',
  image: "https://images.unsplash.com/photo-1599068244528-15bfcd9b208f",
  alt: 'Kashmir snow mountains with frozen lake and dark pine forest in overcast light',
  category: 'Destination Guide',
  author: 'Vibrant Holidays Team',
  date: 'June 10, 2025',
  readTime: '8 min read',
  featured: true
},
{
  id: 'maldives-honeymoon',
  title: '7 Reasons Why Maldives is the Perfect Honeymoon Destination',
  excerpt: 'From overwater bungalows to private beach dinners, discover why Maldives tops every couple\'s bucket list and how to plan the perfect romantic getaway.',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_10eb8dfdc-1772250254542.png',
  alt: 'Maldives overwater villa at sunset with dark turquoise water and golden horizon light',
  category: 'Honeymoon',
  author: 'Vibrant Holidays Team',
  date: 'May 28, 2025',
  readTime: '6 min read'
},
{
  id: 'bali-budget',
  title: 'Bali on a Budget: How to Experience Paradise Without Breaking the Bank',
  excerpt: 'Bali doesn\'t have to be expensive. Here\'s our complete guide to experiencing the best of Bali — temples, beaches, and rice terraces — while keeping costs low.',
  image: 'https://images.unsplash.com/photo-1583085529301-f917abadb5c2',
  alt: 'Bali jungle rice terraces in deep green shadow with dark volcanic hillside at dusk',
  category: 'Budget Travel',
  author: 'Vibrant Holidays Team',
  date: 'May 15, 2025',
  readTime: '7 min read'
},
{
  id: 'dubai-family',
  title: 'Dubai with Kids: The Best Family Activities in the City of Gold',
  excerpt: 'Planning a family trip to Dubai? From the Burj Khalifa to desert safaris and water parks, here\'s your complete guide to keeping the whole family entertained.',
  image: "https://images.unsplash.com/photo-1717910016846-eb5ef02598a2",
  alt: 'Dubai Burj Khalifa at night against dark blue sky with bright city lights below',
  category: 'Family Travel',
  author: 'Vibrant Holidays Team',
  date: 'April 30, 2025',
  readTime: '5 min read'
},
{
  id: 'kerala-monsoon',
  title: 'Kerala in Monsoon: Why the Rains Make It Even More Beautiful',
  excerpt: 'Most people avoid Kerala during monsoon — but that\'s exactly when it\'s most magical. Lush green backwaters, Ayurveda treatments, and fewer crowds await.',
  image: 'https://images.unsplash.com/photo-1584906608816-1089f128b201',
  alt: 'Kerala houseboat on backwaters at dusk with dark water reflections and dim golden light',
  category: 'Destination Guide',
  author: 'Vibrant Holidays Team',
  date: 'April 12, 2025',
  readTime: '6 min read'
},
{
  id: 'visa-tips',
  title: 'Top 10 Visa Tips for Indian Travellers Going Abroad',
  excerpt: 'Visa rejections are stressful and costly. Here are the top 10 tips our visa experts swear by to ensure your application gets approved on the first try.',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1eb6f92bf-1765380450645.png",
  alt: 'Passport and travel documents on a wooden desk with golden light and world map in background',
  category: 'Visa Tips',
  author: 'Vibrant Holidays Team',
  date: 'March 25, 2025',
  readTime: '5 min read'
}];


const categories = ['All', 'Destination Guide', 'Honeymoon', 'Budget Travel', 'Family Travel', 'Visa Tips'];

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
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

  const filtered = posts.filter((p) => {
    const matchCat = activeCategory === 'All' || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F7F9FC 0%, #FFFFFF 100%)' }}>
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Search + Filters */}
        <div className={`flex flex-col sm:flex-row gap-4 mb-10 reveal-up ${visible ? 'active' : ''}`}>
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-border/60 bg-white text-foreground text-sm focus:outline-none focus:border-primary focus:ring-2 transition-colors duration-200 placeholder:text-muted-foreground"
              style={{ boxShadow: '0 2px 8px rgba(13,27,42,0.04)' }} />

          </div>
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
              activeCategory === cat ?
              'text-white shadow-teal' :
              'bg-white border border-border/60 text-muted-foreground hover:border-primary hover:text-primary'}`
              }
              style={activeCategory === cat ? { background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' } : {}}>

                {cat}
              </button>
            )}
          </div>
        </div>

        {/* Featured Post */}
        {featured &&
        <div className={`mb-10 reveal-up ${visible ? 'active' : ''}`}>
            <div className="group bg-white border border-border/60 rounded-3xl overflow-hidden card-hover grid grid-cols-1 lg:grid-cols-2" style={{ boxShadow: '0 4px 32px rgba(13,27,42,0.07)' }}>
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <AppImage
                src={featured.image}
                alt={featured.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />

                <span className="absolute top-4 left-4 text-white text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', boxShadow: '0 2px 8px rgba(216,154,36,0.5)' }}>
                  Featured
                </span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F' }}>
                  {featured.category}
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime}</span>
                  </div>
                  <Link
                  href="/contact"
                  className="text-primary text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200">

                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        }

        {/* Rest of Posts */}
        {rest.length > 0 &&
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) =>
          <div
            key={post.id}
            className={`reveal-scale ${visible ? 'active' : ''} group bg-white border border-border/60 rounded-2xl overflow-hidden card-hover`}
            style={{ transitionDelay: `${i * 60}ms`, boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}>

                <div className="relative h-48 overflow-hidden">
                  <AppImage
                src={post.image}
                alt={post.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105" />

                  <span className="absolute top-3 left-3 text-white text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)' }}>
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground mb-2 leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-border/60">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <Link
                  href="/contact"
                  className="text-primary text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200">

                      Read
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
          )}
          </div>
        }

        {filtered.length === 0 &&
        <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No articles found. Try a different search or category.</p>
          </div>
        }
      </div>
    </section>);

}