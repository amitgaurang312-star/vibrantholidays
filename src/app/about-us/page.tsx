import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import AboutHero from './components/AboutHero';
import AboutStory from './components/AboutStory';

export default function AboutUsPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
