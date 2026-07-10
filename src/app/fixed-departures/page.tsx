import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import FixedDeparturesHero from './components/FixedDeparturesHero';
import DeparturesList from './components/DeparturesList';

export default function FixedDeparturesPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <FixedDeparturesHero />
        <DeparturesList />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
