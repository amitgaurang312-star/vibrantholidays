'use client';

import React, { Suspense, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const WhyChooseSection = dynamic(() => import('@/app/components/WhyChooseSection'), { ssr: false });
const DomesticDestinations = dynamic(() => import('@/app/components/DomesticDestinations'), { ssr: false });
const InternationalDestinations = dynamic(() => import('@/app/components/InternationalDestinations'), { ssr: false });
const TravelMemoriesSection = dynamic(() => import('@/app/components/TravelMemoriesSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/app/components/TestimonialsSection'), { ssr: false });

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
    <Suspense fallback={null}>
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
    </Suspense>
  );
}
