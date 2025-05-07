import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data';
import ServiceDetail from '@/components/sections/ServiceDetail';
import PageHeader from '@/components/layout/PageHeader';

export const generateMetadata = ({ params }: { params: { id: string } }): Metadata => {
  const service = services.find((s) => s.id === params.id);
  
  if (!service) {
    return {
      title: 'Service Not Found | KVS Techflow IT Solution',
      description: 'The requested service could not be found.',
    };
  }
  
  return {
    title: `${service.title} | KVS Techflow IT Solution`,
    description: service.description,
  };
};

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id);
  
  if (!service) {
    notFound();
  }
  
  return (
    <>
      <PageHeader 
        title={service.title} 
        description={service.shortDescription}
      />
      <ServiceDetail service={service} />
    </>
  );
}

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}