import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import ReviewsHero from './components/ReviewsHero';
import ReviewsGrid from './components/ReviewsGrid';

export default function ReviewsPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <ReviewsHero />
        <ReviewsGrid />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
