'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { PackageData } from '@/data/packageData';

interface Props {
  pkg: PackageData;
  related: PackageData[];
}

export default function PackageDetailClient({ pkg, related }: Props) {
  const router = useRouter();
  const [openDay, setOpenDay] = useState<number | null>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', date: '', guests: '2', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Package Enquiry',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          travelDate: formData.date,
          guests: formData.guests,
          packageName: pkg.packageName,
          destination: pkg.destination,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFormError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        router.push('/thank-you');
      }
    } catch {
      setFormError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const whatsappMsg = encodeURIComponent(
    `Hi! I'm interested in the *${pkg.packageName}* package (${pkg.destination}, ${pkg.duration}). Please share more details.`
  );

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO BANNER ─────────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        {pkg.heroVideo ? (
          <video
            src={pkg.heroVideo}
            poster={pkg.heroImage}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img src={pkg.heroImage} alt={pkg.destination} className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-0 right-0 z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-white/70 text-sm">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tour-packages" className="hover:text-white transition-colors">Tour Packages</Link>
            <span>/</span>
            <span className="text-white font-medium">{pkg.destination}</span>
          </nav>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 w-fit"
            style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)', color: '#fff' }}
          >
            {pkg.type === 'domestic' ? '🇮🇳 Domestic' : '✈️ International'} · {pkg.duration}
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
            {pkg.packageName}
          </h1>
          <p className="text-white/80 text-lg sm:text-xl mb-6">{pkg.tagline}</p>
          <div className="flex flex-wrap gap-3">
            <span className="glass-panel text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {pkg.duration}
            </span>
            <span className="text-white text-sm font-bold px-4 py-2 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)' }}>
              From {pkg.price} / person
            </span>
            <span className="glass-panel text-white text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              {pkg.hotelCategory}
            </span>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT COLUMN — Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* Overview */}
            <section>
              <SectionHeading icon="🗺️" title="Package Overview" />
              <p className="text-gray-600 leading-relaxed text-base">{pkg.overview}</p>
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { label: 'Duration', value: pkg.duration, icon: '⏱️' },
                  { label: 'Meal Plan', value: pkg.mealPlan, icon: '🍽️' },
                  { label: 'Hotel', value: pkg.hotelCategory, icon: '🏨' },
                  { label: 'Transport', value: pkg.transportation.split('+')[0].trim(), icon: '🚗' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-4 border border-teal-100">
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{stat.label}</div>
                    <div className="text-sm font-semibold text-gray-800 mt-0.5">{stat.value}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Destinations Covered */}
            <section>
              <SectionHeading icon="📍" title="Destinations Covered" />
              <div className="flex flex-wrap gap-2">
                {pkg.destinationsCovered.map((d) => (
                  <span key={d} className="px-4 py-2 rounded-full text-sm font-medium text-teal-700 border border-teal-200 bg-teal-50">
                    {d}
                  </span>
                ))}
              </div>
            </section>

            {/* Highlights */}
            <section>
              <SectionHeading icon="✨" title="Package Highlights" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl p-3">
                    <span className="text-amber-500 mt-0.5 flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <SectionHeading icon="📋" title="Inclusions & Exclusions" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    What's Excluded
                  </h4>
                  <ul className="space-y-2">
                    {pkg.exclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Day-wise Itinerary */}
            <section>
              <SectionHeading icon="🗓️" title="Day-wise Itinerary" />
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div key={day.day} className="border border-gray-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
                          style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}
                        >
                          {day.day}
                        </span>
                        <div>
                          <div className="text-xs text-teal-600 font-semibold uppercase tracking-wide mb-1">Day {day.day}</div>
                          <div className="font-semibold text-gray-800">{day.title}</div>
                        </div>
                      </div>
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${openDay === day.day ? 'rotate-180' : ''}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDay === day.day && (
                      <div className="px-5 pb-5 border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed mt-4">{day.description}</p>
                        <div className="flex flex-wrap gap-3 mt-4">
                          {day.meals && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-full">
                              🍽️ {day.meals}
                            </span>
                          )}
                          {day.accommodation && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1.5 rounded-full">
                              🏨 {day.accommodation}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Optional Activities */}
            <section>
              <SectionHeading icon="🎯" title="Optional Activities" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.optionalActivities.map((act) => (
                  <div key={act} className="flex items-start gap-3 p-3 bg-purple-50 border border-purple-100 rounded-xl">
                    <span className="text-purple-500 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{act}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Best Time to Visit */}
            <section>
              <SectionHeading icon="🌤️" title="Best Time to Visit" />
              <div className="bg-gradient-to-r from-sky-50 to-teal-50 border border-sky-200 rounded-2xl p-5">
                <p className="text-gray-700 text-sm leading-relaxed">{pkg.bestTimeToVisit}</p>
              </div>
            </section>

            {/* Things to Carry */}
            <section>
              <SectionHeading icon="🎒" title="Things to Carry" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pkg.thingsToCarry.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-700 bg-gray-50 rounded-xl p-3">
                    <span className="text-teal-500 flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN — Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">

              {/* Price Card */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100">
                <div className="p-6" style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 100%)' }}>
                  <div className="text-white/80 text-sm font-medium mb-1">Starting from</div>
                  <div className="text-white text-4xl font-bold">{pkg.price}</div>
                  <div className="text-white/70 text-sm">per person</div>
                  <div className="mt-3 text-white/80 text-sm">{pkg.duration} · {pkg.mealPlan}</div>
                </div>
                <div className="p-5 bg-white space-y-3">
                  <a
                    href={`https://wa.me/${pkg.whatsappNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp Enquiry
                  </a>
                  <a
                    href="#enquiry-form"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #0B8A8F, #067A7F)' }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Book This Package
                  </a>
                  <a
                    href="tel:+918668355974"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm border-2 border-teal-600 text-teal-700 hover:bg-teal-50 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us Now
                  </a>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
                <h4 className="font-semibold text-gray-800 text-sm uppercase tracking-wide">Package Details</h4>
                {[
                  { label: 'Duration', value: pkg.duration },
                  { label: 'Hotel Category', value: pkg.hotelCategory },
                  { label: 'Transport', value: pkg.transportation },
                  { label: 'Meal Plan', value: pkg.mealPlan },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{item.label}</span>
                    <span className="text-gray-800 font-medium text-right max-w-[55%]">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── ENQUIRY FORM ──────────────────────────────────────────────────── */}
        <section id="enquiry-form" className="mt-16 scroll-mt-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <SectionHeading icon="📩" title="Enquire About This Package" centered />
              <p className="text-gray-500 text-sm">Fill in your details and our travel expert will get back to you within 2 hours.</p>
            </div>
            {submitted ? (
              <div className="text-center py-12 bg-green-50 rounded-3xl border border-green-200">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Enquiry Received!</h3>
                <p className="text-green-600">Our travel expert will contact you within 2 hours. Thank you for choosing Vibrant Holidays!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text" required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel" required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Travel Date</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Number of Guests</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
                    >
                      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+'].map((n) => (
                        <option key={n} value={n}>{n} {n === '1' ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Package</label>
                    <input
                      type="text" readOnly
                      value={pkg.packageName}
                      className="w-full px-4 py-3 rounded-xl border border-gray-100 bg-gray-50 text-sm text-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Special Requests / Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any special requirements, dietary needs, or questions..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm resize-none"
                  />
                </div>
                {formError && (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-600 text-sm">{formError}</p>
                  </div>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl font-semibold text-white text-sm transition-all hover:opacity-90 hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 100%)', boxShadow: '0 8px 24px rgba(11,138,143,0.35)' }}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Enquiry — We'll Respond in 2 Hours"
                  )}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* ── RELATED PACKAGES ──────────────────────────────────────────────── */}
        {related.length > 0 && (
          <section className="mt-20">
            <div className="text-center mb-10">
              <SectionHeading icon="🌍" title="You May Also Like" centered />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/packages/${rel.slug}`}
                  className="group block rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={rel.heroImage}
                      alt={rel.destination}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">{rel.destination}</div>
                      <div className="text-white font-semibold text-base leading-tight">{rel.packageName}</div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-white text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: 'linear-gradient(135deg, #C8860E, #F0BC4A)' }}>
                        {rel.price}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{rel.duration}</span>
                      <span className="text-teal-600 font-semibold group-hover:gap-2 flex items-center gap-1 transition-all">
                        View Package
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function SectionHeading({ icon, title, centered }: { icon: string; title: string; centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-5 ${centered ? 'justify-center' : ''}`}>
      <span className="text-2xl">{icon}</span>
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-200 to-transparent" />
    </div>
  );
}
