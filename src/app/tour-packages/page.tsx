import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import PackagesHero from '@/app/tour-packages/components/PackagesHero';
import PackagesTabs from '@/app/tour-packages/components/PackagesTabs';
import PackagesCTA from '@/app/tour-packages/components/PackagesCTA';
import ScrollProgress from '@/app/components/ScrollProgress';

export default function TourPackagesPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <PackagesHero />
        <PackagesTabs />
        <PackagesCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}