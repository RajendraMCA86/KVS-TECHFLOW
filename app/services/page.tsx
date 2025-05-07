import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ServicesList from '@/components/sections/ServicesList';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Services | KVS Techflow IT Solution',
  description: 'Explore our comprehensive range of technology services including web development, mobile applications, cloud solutions, and IT consulting.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="Our Services" 
        description="Comprehensive technology solutions to fuel your business growth"
      />
      <ServicesList />
      <CTA />
    </>
  );
}