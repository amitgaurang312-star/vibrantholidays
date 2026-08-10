'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface FormState {
  name: string;
  phone: string;
  email: string;
  requirement: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  requirement?: string;
}

export default function LeadPopup() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', requirement: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const autoCloseTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const closePopup = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setVisible(false);
      setClosing(false);
    }, 400);
  }, []);

  const resetAutoCloseTimer = useCallback(() => {
    if (autoCloseTimerRef.current) {
      clearTimeout(autoCloseTimerRef.current);
    }
    autoCloseTimerRef.current = setTimeout(() => {
      if (!submitted) closePopup();
    }, 7000);
  }, [submitted, closePopup]);

  useEffect(() => {
    // Show popup after a short delay on page load
    const showTimer = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Start the auto-close timer when popup becomes visible
    resetAutoCloseTimer();
    return () => {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    };
  }, [visible]); // eslint-disable-line react-hooks/exhaustive-deps

  // When submitted, clear the auto-close timer so it doesn't close during success message
  useEffect(() => {
    if (submitted) {
      if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
      setTimeout(() => closePopup(), 3000);
    }
  }, [submitted, closePopup]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [visible]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[+\d\s\-()]{7,15}$/.test(form.phone.trim())) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!form.requirement.trim()) newErrors.requirement = 'Please share your requirement';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Reset auto-close timer on every keystroke
    resetAutoCloseTimer();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setSubmitError('');
    // Clear auto-close timer during submission
    if (autoCloseTimerRef.current) clearTimeout(autoCloseTimerRef.current);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formName: 'Lead Popup Inquiry',
          name: form.name.trim(),
          phone: form.phone.trim(),
          email: form.email.trim() || undefined,
          message: form.requirement.trim(),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Submission failed');
      setSubmitted(true);
      closePopup();
      router.push('/thank-you');
    } catch (err: unknown) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      // Resume auto-close timer if submission failed
      resetAutoCloseTimer();
    } finally {
      setSubmitting(false);
    }
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:px-4"
      style={{
        background: 'rgba(13, 27, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: closing ? 'popupFadeOut 0.4s ease forwards' : 'popupFadeIn 0.45s ease forwards',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) closePopup(); }}
    >
      <style>{`
        @keyframes popupFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes popupFadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        @keyframes popupSlideIn {
          from { opacity: 0; transform: translateY(32px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popupSlideOut {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(24px) scale(0.97); }
        }
        @keyframes popupSlideInMobile {
          from { opacity: 0; transform: translateY(100%); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="relative w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: '#ffffff',
          animation: closing ? 'popupSlideOut 0.4s ease forwards' : 'popupSlideIn 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          maxHeight: '92vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
        onClick={(e) => e.stopPropagation()}
        onMouseMove={resetAutoCloseTimer}
        onFocus={resetAutoCloseTimer}
        onKeyDown={resetAutoCloseTimer}
      >
        {/* Drag handle for mobile */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="w-10 h-1 rounded-full bg-gray-300" />
        </div>

        {/* Header gradient banner */}
        <div
          className="relative px-5 sm:px-6 pt-4 sm:pt-6 pb-4 sm:pb-5 text-white"
          style={{ background: 'linear-gradient(135deg, #0B8A8F 0%, #0ABBC2 55%, #067A7F 100%)' }}
        >
          {/* Close button */}
          <button
            onClick={closePopup}
            aria-label="Close popup"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/20 active:scale-95 touch-manipulation"
            style={{ color: 'rgba(255,255,255,0.9)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Decorative plane icon */}
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.18)' }}
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Vibrant Holidays
              </p>
              <h2 className="text-base sm:text-lg font-bold leading-tight">Plan Your Dream Trip</h2>
            </div>
          </div>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.82)' }}>
            Share your details and our travel expert will get back to you within 2 hours!
          </p>
        </div>

        {/* Form body */}
        <div className="px-5 sm:px-6 py-4 sm:py-5">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center gap-3">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mb-1"
                style={{ background: 'linear-gradient(135deg, #0B8A8F, #0ABBC2)' }}
              >
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-slate-800">Thank You!</h3>
              <p className="text-sm text-slate-500 max-w-xs">
                Your inquiry has been received. Our travel expert will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3 sm:gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="popup-name" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Full Name <span style={{ color: '#0B8A8F' }}>*</span>
                </label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200"
                  style={{
                    border: errors.name ? '1.5px solid #ef4444' : '1.5px solid #DDE6EF',
                    background: '#F7F9FC',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0B8A8F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(11,138,143,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.name ? '#ef4444' : '#DDE6EF'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="popup-phone" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Phone Number <span style={{ color: '#0B8A8F' }}>*</span>
                </label>
                <input
                  id="popup-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200"
                  style={{
                    border: errors.phone ? '1.5px solid #ef4444' : '1.5px solid #DDE6EF',
                    background: '#F7F9FC',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0B8A8F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(11,138,143,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.phone ? '#ef4444' : '#DDE6EF'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="popup-email" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Email Address <span className="text-slate-400 font-normal normal-case">(optional)</span>
                </label>
                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="e.g. rahul@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200"
                  style={{
                    border: errors.email ? '1.5px solid #ef4444' : '1.5px solid #DDE6EF',
                    background: '#F7F9FC',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0B8A8F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(11,138,143,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.email ? '#ef4444' : '#DDE6EF'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.email && <p className="text-xs text-red-500 mt-0.5">{errors.email}</p>}
              </div>

              {/* Requirement */}
              <div className="flex flex-col gap-1">
                <label htmlFor="popup-requirement" className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                  Your Requirement <span style={{ color: '#0B8A8F' }}>*</span>
                </label>
                <textarea
                  id="popup-requirement"
                  name="requirement"
                  rows={3}
                  placeholder="e.g. Family trip to Goa for 5 nights in December..."
                  value={form.requirement}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl text-sm text-slate-800 placeholder-slate-400 outline-none transition-all duration-200 resize-none"
                  style={{
                    border: errors.requirement ? '1.5px solid #ef4444' : '1.5px solid #DDE6EF',
                    background: '#F7F9FC',
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#0B8A8F'; e.currentTarget.style.boxShadow = '0 0 0 3px rgba(11,138,143,0.12)'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = errors.requirement ? '#ef4444' : '#DDE6EF'; e.currentTarget.style.boxShadow = 'none'; }}
                />
                {errors.requirement && <p className="text-xs text-red-500 mt-0.5">{errors.requirement}</p>}
              </div>

              {/* Submit error */}
              {submitError && (
                <p className="text-xs text-red-500 bg-red-50 px-3 py-2 rounded-lg">{submitError}</p>
              )}

              {/* Submit button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-2xl text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 mt-1"
                style={{
                  background: submitting
                    ? 'linear-gradient(135deg, #9ca3af, #d1d5db)'
                    : 'linear-gradient(135deg, #C8860E 0%, #D89A24 50%, #F0BC4A 100%)',
                  boxShadow: submitting ? 'none' : '0 4px 16px rgba(216,154,36,0.40)',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                }}
                onMouseEnter={(e) => { if (!submitting) { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(216,154,36,0.50)'; } }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = submitting ? 'none' : '0 4px 16px rgba(216,154,36,0.40)'; }}
              >
                {submitting ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    Get Free Travel Quote
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-400">
                🔒 Your information is safe with us. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
