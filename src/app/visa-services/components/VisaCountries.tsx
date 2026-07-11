'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface VisaCountry {
  id: string;
  country: string;
  flag: string;
  type: string;
  processingTime: string;
  validity: string;
  documents: string[];
  badge?: string;
}

const countries: VisaCountry[] = [
  {
    id: 'dubai',
    country: 'Dubai (UAE)',
    flag: '🇦🇪',
    type: 'Tourist Visa',
    processingTime: '3–5 Working Days',
    validity: '30 / 60 / 90 Days',
    documents: ['Passport (6 months validity)', 'Passport-size photos', 'Bank statement (3 months)', 'Flight itinerary', 'Hotel booking'],
    badge: 'Most Popular',
  },
  {
    id: 'thailand',
    country: 'Thailand',
    flag: '🇹🇭',
    type: 'Tourist Visa / Visa on Arrival',
    processingTime: '2–3 Working Days',
    validity: '30 Days',
    documents: ['Passport (6 months validity)', 'Passport-size photos', 'Return flight ticket', 'Hotel booking', 'Travel insurance'],
  },
  {
    id: 'bali',
    country: 'Bali (Indonesia)',
    flag: '🇮🇩',
    type: 'Visa on Arrival',
    processingTime: 'On Arrival',
    validity: '30 Days',
    documents: ['Passport (6 months validity)', 'Return flight ticket', 'Sufficient funds proof', 'Hotel booking'],
    badge: 'Easy Process',
  },
  {
    id: 'singapore',
    country: 'Singapore',
    flag: '🇸🇬',
    type: 'Tourist Visa',
    processingTime: '5–7 Working Days',
    validity: '30 Days',
    documents: ['Passport (6 months validity)', 'Passport-size photos', 'Bank statement (6 months)', 'ITR / Salary slips', 'Hotel booking', 'Flight itinerary'],
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    type: 'Visa Free / eNTRI',
    processingTime: '1–2 Working Days',
    validity: '15 Days',
    documents: ['Passport (6 months validity)', 'Return flight ticket', 'Hotel booking', 'Sufficient funds'],
    badge: 'Visa Free',
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    flag: '🇻🇳',
    type: 'e-Visa',
    processingTime: '3 Working Days',
    validity: '30 / 90 Days',
    documents: ['Passport (6 months validity)', 'Digital passport photo', 'Travel itinerary', 'Hotel booking'],
  },
  {
    id: 'srilanka',
    country: 'Sri Lanka',
    flag: '🇱🇰',
    type: 'ETA (Electronic Travel Authorization)',
    processingTime: '24–48 Hours',
    validity: '30 Days',
    documents: ['Passport (6 months validity)', 'Return flight ticket', 'Hotel booking', 'Sufficient funds'],
    badge: 'Quick Approval',
  },
  {
    id: 'maldives',
    country: 'Maldives',
    flag: '🇲🇻',
    type: 'Visa on Arrival',
    processingTime: 'On Arrival',
    validity: '30 Days',
    documents: ['Passport (6 months validity)', 'Return flight ticket', 'Hotel booking', 'Sufficient funds (USD 100/day)'],
    badge: 'Free Visa',
  },
];

const steps = [
  { step: '01', title: 'Submit Documents', desc: 'Share your documents via WhatsApp or email. We verify completeness.' },
  { step: '02', title: 'Application Filed', desc: 'Our visa experts file your application with the embassy/consulate.' },
  { step: '03', title: 'Track Status', desc: 'We keep you updated at every stage of the visa processing.' },
  { step: '04', title: 'Visa Delivered', desc: 'Receive your approved visa digitally or by courier.' },
];

export default function VisaCountries() {
  const [expanded, setExpanded] = useState<string | null>(null);
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

        {/* Header */}
        <div className={`text-center mb-14 reveal-up ${visible ? 'active' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Country-wise Assistance
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Visa for <span className="text-gradient-gold">Every Destination</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Click on any country to see required documents and processing time.
          </p>
        </div>

        {/* Country Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {countries.map((c, i) => (
            <div
              key={c.id}
              className={`reveal-scale ${visible ? 'active' : ''} bg-white border border-border/60 rounded-2xl overflow-hidden transition-all duration-300`}
              style={{ transitionDelay: `${i * 60}ms`, boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
            >
              {/* Card Header */}
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/40 transition-colors duration-200"
                onClick={() => setExpanded(expanded === c.id ? null : c.id)}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{c.flag}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-display text-lg font-semibold text-foreground">{c.country}</h3>
                      {c.badge && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(216,154,36,0.12)', color: '#D89A24', border: '1px solid rgba(216,154,36,0.20)' }}>
                          {c.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm mt-0.5">{c.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="hidden sm:block text-right">
                    <p className="text-xs text-muted-foreground">Processing</p>
                    <p className="text-sm font-semibold text-primary">{c.processingTime}</p>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${expanded === c.id ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Expanded Content */}
              {expanded === c.id && (
                <div className="px-5 pb-5 border-t border-border/60 pt-4" style={{ background: '#F7F9FC' }}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white rounded-xl p-3 border border-border/60">
                      <p className="text-xs text-muted-foreground mb-1">Validity</p>
                      <p className="text-sm font-semibold text-foreground">{c.validity}</p>
                    </div>
                    <div className="bg-white rounded-xl p-3 border border-border/60">
                      <p className="text-xs text-muted-foreground mb-1">Processing Time</p>
                      <p className="text-sm font-semibold text-primary">{c.processingTime}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Required Documents</p>
                    <ul className="space-y-1.5">
                      {c.documents.map((doc) => (
                        <li key={doc} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-teal hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}
                    >
                      Apply Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <a
                      href={`https://wa.me/919876543210?text=${encodeURIComponent(`Hi! I'm interested in a ${c.country} ${c.type}. Please guide me on the visa process.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff', boxShadow: '0 2px 10px rgba(37,211,102,0.25)' }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How it Works */}
        <div className={`reveal-up ${visible ? 'active' : ''}`}>
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl lg:text-4xl font-semibold text-foreground mb-3">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-muted-foreground">Simple 4-step process to get your visa approved</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className={`reveal-scale ${visible ? 'active' : ''} relative bg-white border border-border/60 rounded-2xl p-6 text-center`}
                style={{ transitionDelay: `${i * 80}ms`, boxShadow: '0 2px 16px rgba(13,27,42,0.05)' }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: 'rgba(11,138,143,0.10)' }}>
                  <span className="text-primary font-bold text-lg">{s.step}</span>
                </div>
                <h4 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
