import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import ContactForm from '@/components/sections/Contact';
import ContactInfo from '@/components/sections/ContactInfo';

export const metadata: Metadata = {
  title: 'Contact Us | KVS Techflow IT Solution',
  description: 'Get in touch with KVS Techflow IT Solution for inquiries, quotes, or to discuss your technology needs.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader 
        title="Contact Us" 
        description="Get in touch with our team"
      />
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </>
  );
}