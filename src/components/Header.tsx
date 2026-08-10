'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/#destinations' },
  { label: 'Fixed Departures', href: '/fixed-departures' },
  { label: 'Tour Packages', href: '/tour-packages' },
  { label: 'Visa Services', href: '/visa-services' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Blog', href: '/blog' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
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

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-2"
        style={
          scrolled
            ? {
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,248,255,0.98) 40%, rgba(224,240,255,0.95) 100%)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderBottom: '1px solid rgba(180,210,255,0.35)',
                boxShadow: '0 4px 32px rgba(180,210,255,0.45), 0 1px 0 rgba(255,255,255,0.9)',
              }
            : {
                background: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(235,248,255,0.97) 35%, rgba(210,235,255,0.92) 70%, rgba(190,225,255,0.85) 100%)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(180,210,255,0.25)',
                boxShadow: '0 2px 24px rgba(180,210,255,0.3)',
              }
        }
      >
        {/* Soft cloud puff accents */}
        <div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ zIndex: 0 }}
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

        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between relative" style={{ zIndex: 1 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0 min-w-0">
            <AppLogo size={160} className="transition-transform duration-400 group-hover:scale-105 max-w-[140px] sm:max-w-[192px] h-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="nav-link-underline text-sm font-semibold tracking-wide transition-colors duration-200 text-slate-700 hover:text-blue-600"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/tour-packages"
              className="hidden sm:flex items-center gap-2 bg-gold-gradient text-white px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-gold hover:-translate-y-0.5 hover:scale-105"
              style={{ boxShadow: '0 4px 16px rgba(216,154,36,0.35)' }}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              Book Now
            </Link>

            {/* Hamburger — larger touch target for mobile */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2.5 rounded-xl transition-colors duration-200 hover:bg-blue-50 active:bg-blue-100 touch-manipulation"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              style={{ minWidth: 44, minHeight: 44 }}
            >
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-6 h-0.5 rounded-full transition-all duration-300 bg-slate-700 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          style={{ background: 'rgba(13,27,42,0.55)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-full xs:w-80 h-full flex flex-col"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(32px)',
              borderLeft: '1px solid rgba(11,138,143,0.12)',
              boxShadow: '-20px 0 60px rgba(13,27,42,0.15)',
              maxWidth: '320px',
            }}
            onClick={(e) => e?.stopPropagation()}
          >
            {/* Mobile Header — single logo + close button */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border">
              <AppLogo size={148} />
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors duration-200 touch-manipulation flex-shrink-0"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col gap-0.5 px-3 py-3 flex-1 overflow-y-auto">
              {navLinks?.map((link, i) => (
                <Link
                  key={link?.href}
                  href={link?.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 text-foreground font-medium py-3.5 px-4 rounded-xl hover:bg-primary/8 hover:text-primary transition-all duration-200 text-base group touch-manipulation"
                  style={{ animationDelay: `${i * 40}ms`, minHeight: 48 }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-200 flex-shrink-0" />
                  {link?.label}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-4 pb-8 pt-4 border-t border-border space-y-3" style={{ paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }}>
              <Link
                href="/tour-packages"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 bg-gold-gradient text-white py-4 rounded-2xl font-semibold text-sm shadow-gold touch-manipulation"
                style={{ minHeight: 52 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Book Your Trip
              </Link>
              <a
                href="https://wa.me/918668355974"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-muted text-foreground py-4 rounded-2xl font-medium text-sm hover:bg-primary/10 hover:text-primary transition-colors duration-200 touch-manipulation"
                style={{ minHeight: 52 }}
              >
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}