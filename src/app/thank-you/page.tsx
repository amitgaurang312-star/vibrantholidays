'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ThankYouPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #EEF9F9 0%, #F7FBFB 50%, #EEF3F8 100%)' }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(10,187,194,0.12) 0%, transparent 70%)',
          transform: 'translate(-30%, -30%)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(11,138,143,0.10) 0%, transparent 70%)',
          transform: 'translate(30%, 30%)',
        }}
      />
      <style>{`
        @keyframes checkPop {
          0% { transform: scale(0.4); opacity: 0; }
          60% { transform: scale(1.15); opacity: 1; }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes planeFloat {
          0%, 100% { transform: translateY(0px) rotate(-8deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
        }
        .check-pop { animation: checkPop 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
        .fade-up-1 { animation: fadeSlideUp 0.6s ease 0.5s both; }
        .fade-up-2 { animation: fadeSlideUp 0.6s ease 0.65s both; }
        .fade-up-3 { animation: fadeSlideUp 0.6s ease 0.8s both; }
        .fade-up-4 { animation: fadeSlideUp 0.6s ease 0.95s both; }
        .plane-float { animation: planeFloat 3s ease-in-out infinite; }
      `}</style>
      <div className={`relative z-10 w-full max-w-lg text-center ${mounted ? '' : 'opacity-0'}`}>

        {/* Floating plane decoration */}
        <div className="plane-float mb-6 inline-block">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto"
            style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 100%)', boxShadow: '0 8px 32px rgba(11,138,143,0.30)' }}
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>

        {/* Check circle */}
        <div className="check-pop flex items-center justify-center mb-6">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 100%)',
              boxShadow: '0 12px 40px rgba(11,138,143,0.35)',
            }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Heading */}
        <div className="fade-up-1 mb-3">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.20)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#0B8A8F' }} />
            Vibrant Holidays
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 leading-tight">
            Thank You! 🎉
          </h1>
        </div>

        {/* Subtext */}
        <div className="fade-up-2 mb-8">
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-sm mx-auto">
            Your enquiry has been received. Our travel expert will get back to you within{' '}
            <span className="font-semibold" style={{ color: '#0B8A8F' }}>2 hours</span>.
          </p>
        </div>

        {/* Info cards */}
        <div className="fade-up-3 grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {[
            { icon: '📞', label: 'Quick Response', desc: 'Within 2 hours' },
            { icon: '✈️', label: 'Custom Quote', desc: 'Tailored for you' },
            { icon: '🌟', label: 'Expert Advice', desc: 'Trusted since 2010' },
          ]?.map((item) => (
            <div
              key={item?.label}
              className="bg-white rounded-2xl p-4 text-center"
              style={{ border: '1px solid rgba(11,138,143,0.12)', boxShadow: '0 4px 16px rgba(13,27,42,0.06)' }}
            >
              <div className="text-2xl mb-1">{item?.icon}</div>
              <p className="text-xs font-bold text-slate-700">{item?.label}</p>
              <p className="text-xs text-slate-500 mt-0.5">{item?.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="fade-up-4 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 20px rgba(11,138,143,0.30)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <a
            href="https://wa.me/918668355974?text=Hi%20Vibrant%20Holidays!%20I%20just%20submitted%20an%20enquiry%20and%20would%20like%20to%20follow%20up."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 20px rgba(37,211,102,0.30)' }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Explore more */}
        <div className="fade-up-4 mt-8 pt-6" style={{ borderTop: '1px solid rgba(11,138,143,0.12)' }}>
          <p className="text-xs text-slate-400 mb-3 uppercase tracking-widest font-semibold">Explore While You Wait</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { href: '/tour-packages', label: 'Tour Packages' },
              { href: '/fixed-departures', label: 'Fixed Departures' },
              { href: '/visa-services', label: 'Visa Services' },
              { href: '/blog', label: 'Travel Blog' },
            ]?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'rgba(11,138,143,0.08)',
                  color: '#0B8A8F',
                  border: '1px solid rgba(11,138,143,0.15)',
                }}
              >
                {link?.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
