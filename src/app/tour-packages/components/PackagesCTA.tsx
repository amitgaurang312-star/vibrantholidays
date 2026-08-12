import React from 'react';
import Link from 'next/link';

export default function PackagesCTA() {
  return (
    <section className="bg-foreground py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
          Custom Packages
        </span>
        <h2 className="font-display text-section-xl text-white font-semibold mb-4">
          Don&apos;t see what you&apos;re looking for?
        </h2>
        <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
          We specialize in fully customized itineraries. Tell us your dream destination, budget, and travel dates — we&apos;ll craft the perfect trip for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gold-gradient text-white px-8 py-4 rounded-full font-semibold text-base transition-all duration-300 hover:shadow-gold hover:-translate-y-1"
          >
            Get Custom Package
          </Link>
          <a
            href="tel:+918668355974"
            className="flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-medium text-base transition-all duration-300 hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}