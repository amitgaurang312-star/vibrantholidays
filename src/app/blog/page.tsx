import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ScrollProgress from '@/app/components/ScrollProgress';
import BlogHero from './components/BlogHero';
import BlogGrid from './components/BlogGrid';

export default function BlogPage() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
