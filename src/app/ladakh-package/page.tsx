'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import LadakhHero from './components/LadakhHero';

const LadakhContent = dynamic(() => import('./components/LadakhContent'), {
  loading: () => (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="h-8 bg-gray-100 rounded-full w-48 mx-auto animate-pulse" />
        <div className="h-64 bg-gray-100 rounded-3xl animate-pulse" />
        <div className="h-48 bg-gray-100 rounded-3xl animate-pulse" />
      </div>
    </div>
  ),
  ssr: false,
});

export default function LadakhPackagePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <LadakhHero />
        <Suspense fallback={null}>
          <LadakhContent />
        </Suspense>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}