'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const LeadPopup = dynamic(() => import('@/components/LeadPopup'), {
  ssr: false,
  loading: () => null,
});

export default function LeadPopupWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <LeadPopup />;
}
