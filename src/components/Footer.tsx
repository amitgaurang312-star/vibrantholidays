import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #0B3D4A 50%, #0B5A60 100%)' }}>
      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 orb orb-teal opacity-20 pointer-events-none" style={{ animation: 'orb-float 10s ease-in-out infinite' }} />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 orb orb-gold opacity-15 pointer-events-none" style={{ animation: 'orb-float 12s ease-in-out infinite reverse' }} />
      {/* Top accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(11,138,143,0.6), rgba(216,154,36,0.6), transparent)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-8 sm:pb-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
              <AppLogo size={36} />
              <span className="font-display text-xl font-semibold text-white">Vibrant Holidays</span>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5 sm:mb-6">
              Crafting unforgettable travel experiences across India and the world. Your dream holiday, perfectly planned.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="https://wa.me/918668355974" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal touch-manipulation"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="WhatsApp">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="tel:+918668355974"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal touch-manipulation"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Call us">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
              </a>
              <a href="mailto:vibrantholidays17@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-teal touch-manipulation"
                style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}
                aria-label="Email us">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { label: 'Home', href: '/' },
                { label: 'Tour Packages', href: '/tour-packages' },
                { label: 'Fixed Departures', href: '/fixed-departures' },
                { label: 'Visa Services', href: '/visa-services' },
                { label: 'About Us', href: '/about-us' },
                { label: 'Contact Us', href: '/contact' },
              ]?.map((link) => (
                <li key={link?.href}>
                  <Link href={link?.href} className="text-white/50 hover:text-accent text-sm transition-all duration-200 flex items-center gap-2 group py-0.5 touch-manipulation">
                    <svg className="w-3 h-3 text-primary/50 group-hover:text-accent transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent" />
              Top Destinations
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {['Kashmir', 'Kerala', 'Goa', 'Dubai', 'Bali', 'Maldives', 'Thailand']?.map((dest) => (
                <li key={dest}>
                  <Link href="/tour-packages" className="text-white/50 hover:text-accent text-sm transition-all duration-200 flex items-center gap-2 group py-0.5 touch-manipulation">
                    <svg className="w-3 h-3 text-primary/50 group-hover:text-accent transition-colors duration-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {dest}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 sm:mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-accent" />
              Contact Us
            </h3>
            <address className="not-italic space-y-3 sm:space-y-4">
              <p className="text-white/50 text-sm leading-relaxed">
                T/A3/4, Flat No.303, T-Sector,<br />
                Ajmera Housing Complex, Pimpri,<br />
                Pune - 411018
              </p>
              <a href="tel:+918668355974" className="flex items-center gap-2.5 text-white/50 hover:text-accent text-sm transition-colors duration-200 group touch-manipulation py-0.5">
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors duration-200">
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                </div>
                +91 8668355974
              </a>
              <a href="mailto:vibrantholidays17@gmail.com" className="flex items-start gap-2.5 text-white/50 hover:text-accent text-sm transition-colors duration-200 group touch-manipulation py-0.5" style={{ wordBreak: 'break-all' }}>
                <div className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/40 transition-colors duration-200 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                vibrantholidays17@gmail.com
              </a>
            </address>
          </div>
        </div>

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 py-6 sm:py-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {[
            {
              icon: (
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ),
              label: '4.9 Google Rating'
            },
            {
              icon: (
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              ),
              label: '50+ Destinations'
            },
            {
              icon: (
                <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: '100+ Happy Families'
            },
          ]?.map((badge) => (
            <div key={badge?.label} className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.10)' }}>
              {badge?.icon}
              <span className="text-white/60 text-xs font-medium">{badge?.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/30 text-sm text-center sm:text-left">
            © 2026 Vibrant Holidays. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-sm transition-colors duration-200 touch-manipulation">Privacy Policy</Link>
            <span className="text-white/15">·</span>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-sm transition-colors duration-200 touch-manipulation">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}