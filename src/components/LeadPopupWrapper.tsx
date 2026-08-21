'use client';

import React, { useEffect, useState } from 'react';
import LeadPopup from '@/components/LeadPopup';

export default function LeadPopupWrapper() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <LeadPopup />;
}
