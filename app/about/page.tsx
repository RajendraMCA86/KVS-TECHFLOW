import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import AboutContent from '@/components/sections/AboutContent';
import Team from '@/components/sections/Team';

export const metadata: Metadata = {
  title: 'About Us | KVS Techflow IT Solution',
  description: 'Learn about KVS Techflow IT Solution, our mission, vision, and the team behind our innovative technology solutions.',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="About Us" 
        description="Learn about our mission and the people behind KVS Techflow"
      />
      <AboutContent />
      <Team />
    </>
  );
}