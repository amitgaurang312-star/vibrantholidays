import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import VisaHero from './components/VisaHero';
import VisaCountries from './components/VisaCountries';

export default function VisaServicesPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <VisaHero />
        <VisaCountries />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
