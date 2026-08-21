'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Fixed Departures', href: '/fixed-departures' },
  { label: 'Ladakh Package', href: '/ladakh-package' },
  { label: 'Tour Packages', href: '/tour-packages' },
  { label: 'Visa Services', href: '/visa-services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact' },
];

const defaultHeaderStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,248,255,0.97) 35%, rgba(210,235,255,0.92) 70%, rgba(190,225,255,0.85) 100%)',
  backdropFilter: 'blur(8px)',
  WebkitBackdropFilter: 'blur(8px)',
  borderBottom: '1px solid rgba(180,210,255,0.25)',
  boxShadow: '0 2px 24px rgba(180,210,255,0.3)',
} as const;

const scrolledHeaderStyle = {
  background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,248,255,0.98) 40%, rgba(224,240,255,0.95) 100%)',
  backdropFilter: 'blur(12px)',
  WebkitBackdropFilter: 'blur(12px)',
  borderBottom: '1px solid rgba(180,210,255,0.35)',
  boxShadow: '0 4px 32px rgba(180,210,255,0.45), 0 1px 0 rgba(255,255,255,0.9)',
} as const;

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Use defaultHeaderStyle on server and first client render to ensure SSR match
  const headerStyle = mounted && scrolled ? scrolledHeaderStyle : defaultHeaderStyle;

  return (
    <>
      <header
        suppressHydrationWarning
        className="relative top-0 left-0 right-0 z-50 transition-all duration-500 py-2"
        style={headerStyle}
      >
        {/* Soft cloud puff accents — hidden on mobile, visible on desktop via Tailwind */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block"
          style={{ zIndex: 0 }}
          suppressHydrationWarning
        >
          <div style={{
            position: 'absolute', top: '-18px', left: '8%',
            width: '120px', height: '60px',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.95) 60%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(8px)', opacity: 0.7,
          }} />
          <div style={{
            position: 'absolute', top: '-10px', left: '18%',
            width: '80px', height: '45px',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.9) 60%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(6px)', opacity: 0.6,
          }} />
          <div style={{
            position: 'absolute', top: '-22px', right: '12%',
            width: '140px', height: '70px',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.95) 60%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(10px)', opacity: 0.65,
          }} />
          <div style={{
            position: 'absolute', top: '-8px', right: '25%',
            width: '90px', height: '50px',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(220,240,255,0.9) 60%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(7px)', opacity: 0.55,
          }} />
          <div style={{
            position: 'absolute', top: '-15px', left: '45%',
            width: '100px', height: '55px',
            background: 'radial-gradient(ellipse at 50% 60%, rgba(255,255,255,0.88) 60%, transparent 100%)',
            borderRadius: '50%', filter: 'blur(8px)', opacity: 0.5,
          }} />
        </div>

        <div
          suppressHydrationWarning
          className="max-w-screen-xl mx-auto px-3 sm:px-5 flex items-center justify-between relative gap-2"
          style={{ zIndex: 1 }}
        >
          {/* Logo — fixed width so nav fits on one line */}
          <Link href="/" className="flex items-center flex-shrink-0 group" style={{ maxWidth: '140px' }}>
            <AppLogo size={140} className="transition-transform duration-300 group-hover:scale-105 w-full h-auto" />
          </Link>

          {/* Desktop Nav — tight spacing to fit all links in one row */}
          <nav className="hidden lg:flex items-center flex-1 justify-center" style={{ gap: '0' }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link-underline whitespace-nowrap font-semibold tracking-wide transition-colors duration-200 text-slate-700 hover:text-blue-600 px-2 xl:px-3"
                style={{ fontSize: '0.78rem' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/tour-packages"
              className="hidden lg:flex items-center gap-1.5 bg-gold-gradient text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 hover:scale-105 whitespace-nowrap"
              style={{ fontSize: '0.78rem', boxShadow: '0 4px 16px rgba(216,154,36,0.35)' }}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Book Now
            </Link>

            {/* Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-xl transition-colors duration-200 hover:bg-blue-50"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay — only rendered client-side after mount */}
      {mounted && mobileOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          style={{ background: 'rgba(13,27,42,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-80 h-full flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(32px)',
              borderLeft: '1px solid rgba(11,138,143,0.12)',
              boxShadow: '-20px 0 60px rgba(13,27,42,0.15)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Header — logo + close */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <AppLogo size={130} />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-1 px-4 py-4 flex-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-foreground font-medium py-3 px-4 rounded-xl hover:bg-primary/8 hover:text-primary transition-all duration-200 text-base group"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-200" />
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-4 pb-8 pt-4 border-t border-border space-y-3">
              <Link
                href="/tour-packages"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-gold-gradient text-white py-3.5 rounded-2xl font-semibold text-sm shadow-gold"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Book Your Trip
              </Link>
              <a
                href="tel:+918668355974"
                className="flex items-center justify-center gap-2 bg-muted text-foreground py-3.5 rounded-2xl font-medium text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200"
              >
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}