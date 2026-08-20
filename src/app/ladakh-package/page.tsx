'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import LadakhHero from './components/LadakhHero';
import LadakhContent from './components/LadakhContent';

export default function LadakhPackagePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <LadakhHero />
        <LadakhContent />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}