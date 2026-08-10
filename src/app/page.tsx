import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/app/components/HeroSection';
import TrustSection from '@/app/components/TrustSection';
import ScrollProgress from '@/app/components/ScrollProgress';
import BelowFoldSections from '@/app/components/BelowFoldSections';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <BelowFoldSections />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}