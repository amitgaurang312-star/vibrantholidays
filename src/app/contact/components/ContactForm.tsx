'use client';

import React, { useState, useEffect, useRef } from 'react';

const destinations = [
  'Kashmir', 'Kerala', 'Goa', 'Himachal Pradesh', 'North East India',
  'Dubai', 'Thailand', 'Bali', 'Vietnam', 'Singapore', 'Singapore–Malaysia',
  'Sri Lanka', 'Maldives', 'Europe', 'Mauritius', 'Nepal', 'Bhutan', 'Other',
];

const travelTypes = [
  'Family Tour', 'Honeymoon', 'Adventure', 'Luxury', 'Group Tour', 'Weekend Trip',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelType: '',
    travelDate: '',
    pax: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase = `w-full px-4 py-3.5 rounded-xl border bg-card text-foreground text-sm font-medium transition-all duration-200 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground`;

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #EEF3F8 0%, #F7F9FC 100%)' }}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Two Options Header ── */}
        <div className={`text-center mb-10 reveal-up ${visible ? 'active' : ''}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Choose How to Enquire
          </span>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
            2 Easy Ways to Reach Us
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            Chat instantly on WhatsApp or fill in the enquiry form — we respond within 2 hours.
          </p>
        </div>

        {/* ── Option Cards Row ── */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '100ms' }}>
          {/* Option 1 — WhatsApp */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl border-2 border-green-200 p-6" style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.12)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: 'rgba(37,211,102,0.12)' }}>
              <svg className="w-6 h-6" fill="#25D366" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-green-600 mb-1">Option 1</span>
            <h3 className="font-display font-semibold text-foreground text-base mb-1">WhatsApp Us</h3>
            <p className="text-muted-foreground text-xs mb-4 leading-relaxed">Get instant replies. Chat with our travel expert right now.</p>
            <a
              href="https://wa.me/918668355974?text=Hi%20Vibrant%20Holidays!%20I%20would%20like%20to%20enquire%20about%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 16px rgba(37,211,102,0.35)' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Option 2 — Enquiry Form */}
          <div className="flex flex-col items-center text-center bg-white rounded-2xl border-2 p-6" style={{ borderColor: 'rgba(11,138,143,0.25)', boxShadow: '0 4px 20px rgba(11,138,143,0.10)' }}>
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: 'rgba(11,138,143,0.10)' }}>
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#0B8A8F' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#0B8A8F' }}>Option 2</span>
            <h3 className="font-display font-semibold text-foreground text-base mb-1">Fill Enquiry Form</h3>
            <p className="text-muted-foreground text-xs mb-4 leading-relaxed">Share your trip details and we'll send a custom quote within 2 hours.</p>
            <a
              href="#enquiry-form"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 16px rgba(11,138,143,0.30)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
              Fill the Form Below
            </a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className={`flex items-center gap-4 max-w-2xl mx-auto mb-12 reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '150ms' }}>
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-2">Or fill the form below</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* ── Form + Info Panel ── */}
        <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Form Panel */}
          <div className={`lg:col-span-3 reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '200ms' }}>
            <div className="bg-white rounded-3xl border border-border/60 p-7 lg:p-10" style={{ boxShadow: '0 8px 40px rgba(13,27,42,0.08)' }}>
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5" style={{ background: 'rgba(11,138,143,0.10)', color: '#0B8A8F', border: '1px solid rgba(11,138,143,0.15)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  Enquiry Form
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                  Tell Us About Your Trip
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fill in the details below and our travel expert will get back to you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(11,138,143,0.12)' }}>
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Enquiry Sent!</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">
                    Thank you! Our team will contact you within 2 hours on your phone or email.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-teal hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="rahul@email.com"
                      className={inputBase}
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="destination">
                        Preferred Destination <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        required
                        value={form.destination}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select destination</option>
                        {destinations.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="travelType">
                        Trip Type
                      </label>
                      <select
                        id="travelType"
                        name="travelType"
                        value={form.travelType}
                        onChange={handleChange}
                        className={inputBase}
                      >
                        <option value="">Select type</option>
                        {travelTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="travelDate">
                        Preferred Travel Date
                      </label>
                      <input
                        id="travelDate"
                        name="travelDate"
                        type="date"
                        value={form.travelDate}
                        onChange={handleChange}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="pax">
                        No. of Travellers
                      </label>
                      <input
                        id="pax"
                        name="pax"
                        type="number"
                        min="1"
                        value={form.pax}
                        onChange={handleChange}
                        placeholder="2"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1.5" htmlFor="message">
                      Additional Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your budget, special requirements, dietary needs, anniversary celebrations, etc."
                      className={`${inputBase} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-4 rounded-2xl font-semibold text-base transition-all duration-300 hover:shadow-teal hover:-translate-y-0.5 flex items-center justify-center gap-2"
                    style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)', boxShadow: '0 4px 20px rgba(11,138,143,0.35)' }}
                  >
                    Send Enquiry
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>

                  <p className="text-center text-muted-foreground text-xs">
                    Or WhatsApp us directly at{' '}
                    <a href="https://wa.me/918668355974" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                      +91 8668355974
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Info Panel */}
          <div className={`lg:col-span-2 space-y-5 reveal-up ${visible ? 'active' : ''}`} style={{ transitionDelay: '300ms' }}>
            {/* Contact cards */}
            {[
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                  </svg>
                ),
                label: 'Call Us',
                value: '+91 8668355974',
                href: 'tel:+918668355974',
                sub: 'Mon–Sat, 9AM–8PM IST',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                label: 'WhatsApp',
                value: '+91 8668355974',
                href: 'https://wa.me/918668355974',
                sub: 'Quick replies, 24×7',
              },
              {
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                label: 'Email Us',
                value: 'vibrantholidays17@gmail.com',
                href: 'mailto:vibrantholidays17@gmail.com',
                sub: 'We reply within 4 hours',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 bg-card rounded-2xl p-5 border border-border card-hover group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs font-medium mb-0.5">{item.label}</p>
                  <p className="text-foreground font-semibold text-sm break-all">{item.value}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{item.sub}</p>
                </div>
              </a>
            ))}

            {/* Address Card */}
            <div className="bg-card rounded-2xl p-5 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs font-medium mb-1">Office Address</p>
                  <address className="not-italic text-foreground text-sm font-medium leading-relaxed">
                    T/A3/4, Flat No.303, T-Sector,<br />
                    Ajmera Housing Complex,<br />
                    Pimpri, Pune – 411018<br />
                    Maharashtra, India
                  </address>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-primary/5 rounded-2xl p-5 border border-primary/20">
              <h3 className="font-semibold text-foreground text-sm mb-3 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Office Hours
              </h3>
              <div className="space-y-2">
                {[
                  { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
                  { day: 'Saturday', time: '9:00 AM – 6:00 PM' },
                  { day: 'Sunday', time: '10:00 AM – 4:00 PM' },
                ].map((row) => (
                  <div key={row.day} className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">{row.day}</span>
                    <span className="text-foreground font-medium">{row.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-primary/20">
                <p className="text-primary text-xs font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                  WhatsApp support available 24×7
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}