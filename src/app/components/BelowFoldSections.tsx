'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const WhyChooseSection = dynamic(() => import('@/app/components/WhyChooseSection'));
const DomesticDestinations = dynamic(() => import('@/app/components/DomesticDestinations'));
const InternationalDestinations = dynamic(() => import('@/app/components/InternationalDestinations'));
const TravelMemoriesSection = dynamic(() => import('@/app/components/TravelMemoriesSection'));
const TestimonialsSection = dynamic(() => import('@/app/components/TestimonialsSection'));

export default function BelowFoldSections() {
  return (
    <Suspense fallback={null}>
      <WhyChooseSection />
      <DomesticDestinations />
      <InternationalDestinations />
      <TravelMemoriesSection />
      <TestimonialsSection />
    </Suspense>
  );
}
