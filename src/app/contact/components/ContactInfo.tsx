'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function ContactInfo() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 lg:py-16 overflow-hidden" style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)' }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Map */}
        <div className={`reveal-scale ${visible ? 'active' : ''} rounded-3xl overflow-hidden border border-border/60`} style={{ height: 400, boxShadow: '0 8px 40px rgba(13,27,42,0.10)' }}>
          <iframe
            title="Vibrant Holidays Office Location — Ajmera Housing Complex, Pimpri, Pune"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.6!2d73.8067!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e760c6d975%3A0x4c2c3b9e760c6d97!2sAjmera%20Housing%20Complex%2C%20Pimpri%2C%20Pune%2C%20Maharashtra%20411018!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Quick CTA Strip */}
        <div
          className={`mt-10 rounded-3xl p-7 lg:p-10 flex flex-col sm:flex-row items-center justify-between gap-5 reveal-up ${visible ? 'active' : ''} relative overflow-hidden`}
          style={{
            background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 60%, #067A7F 100%)',
            transitionDelay: '200ms',
            boxShadow: '0 16px 48px rgba(11,138,143,0.30)',
          }}
        >
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)' }} />
          <div className="relative z-10">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-white mb-1">
              Ready to start your journey?
            </h3>
            <p className="text-white/80 text-sm">
              Call us now — we respond within minutes.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0 relative z-10">
            <a
              href="tel:+918668355974"
              className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}