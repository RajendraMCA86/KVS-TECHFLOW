"use client";

import PageHeader from '@/components/layout/PageHeader';
import Careers from '@/components/sections/Careers';

export default function CareersPage() {
  return (
    <div>
      <PageHeader 
        title="Join Our Team" 
        description="Build the future with us. Explore our current opportunities and become part of our growing team."
      />
      <Careers />
    </div>
  );
}
