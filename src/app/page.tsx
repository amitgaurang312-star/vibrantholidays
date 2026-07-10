import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/app/components/HeroSection';
import TrustSection from '@/app/components/TrustSection';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import DomesticDestinations from '@/app/components/DomesticDestinations';
import InternationalDestinations from '@/app/components/InternationalDestinations';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ScrollProgress from '@/app/components/ScrollProgress';

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <TrustSection />
        <WhyChooseSection />
        <DomesticDestinations />
        <InternationalDestinations />
        <TestimonialsSection />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}