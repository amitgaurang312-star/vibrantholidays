'use client';

import React, { useEffect, useRef, useState } from 'react';
import WhyChooseSection from '@/app/components/WhyChooseSection';
import DomesticDestinations from '@/app/components/DomesticDestinations';
import InternationalDestinations from '@/app/components/InternationalDestinations';
import TravelMemoriesSection from '@/app/components/TravelMemoriesSection';
import TestimonialsSection from '@/app/components/TestimonialsSection';

function LazySection({ children, minHeight = '400px' }: { children: React.ReactNode; minHeight?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: visible ? undefined : minHeight }}>
      {visible ? children : null}
    </div>
  );
}

export default function BelowFoldSections() {
  return (
    <>
      <LazySection minHeight="500px">
        <WhyChooseSection />
      </LazySection>
      <LazySection minHeight="600px">
        <DomesticDestinations />
      </LazySection>
      <LazySection minHeight="600px">
        <InternationalDestinations />
      </LazySection>
      <LazySection minHeight="500px">
        <TravelMemoriesSection />
      </LazySection>
      <LazySection minHeight="400px">
        <TestimonialsSection />
      </LazySection>
    </>
  );
}
