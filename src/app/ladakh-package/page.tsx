import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import LadakhHero from './components/LadakhHero';

const LadakhContent = dynamic(() => import('./components/LadakhContent'));

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