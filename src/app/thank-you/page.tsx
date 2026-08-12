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
            href="tel:+918668355974"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #0B8A8F, #067A7F)', boxShadow: '0 4px 20px rgba(11,138,143,0.30)' }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z"/>
            </svg>
            Call Us Now
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
