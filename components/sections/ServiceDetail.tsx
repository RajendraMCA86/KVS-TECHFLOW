"use client";

import { motion } from 'framer-motion';
import { Service } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { MonitorSmartphone, Cloud, Code, LineChart, Server } from 'lucide-react';

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const iconComponents = {
    MonitorSmartphone,
    Cloud,
    Code,
    LineChart,
    Server
  };

  const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div className="lg:col-span-2">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <IconComponent className="h-8 w-8 text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold mb-6">About This Service</h2>
            <p className="text-gray-600 mb-8">{service.description}</p>
            
            <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, index) => (
                <Card key={index} className="bg-gray-50 border-none">
                  <CardContent className="pt-6">
                    <p className="text-gray-800">{feature}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mb-4">Our Approach</h3>
            <div className="space-y-6">
              {service.offerings.map((offering, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-2">{offering.title}</h4>
                  <p className="text-gray-600">{offering.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Technologies We Use</h3>
                <div className="space-y-4">
                  {getTechnologies(service.id).map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-gray-700">{tech}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getTechnologies(serviceId: string): string[] {
  switch (serviceId) {
    case 'web-development':
      return [
        'React.js',
        'Next.js',
        'TypeScript',
        'Node.js',
        'Express.js',
        'MongoDB',
        'PostgreSQL',
        'GraphQL',
        'REST APIs',
        'Tailwind CSS',
      ];
    case 'mobile-apps':
      return [
        'React Native',
        'Flutter',
        'Swift',
        'Kotlin',
        'Firebase',
        'AWS Amplify',
        'Native APIs',
        'Push Notifications',
      ];
    case 'cloud-services':
      return [
        'AWS',
        'Google Cloud',
        'Azure',
        'Docker',
        'Kubernetes',
        'Terraform',
        'CI/CD',
        'Microservices',
      ];
    case 'it-consulting':
      return [
        'Business Analysis',
        'System Architecture',
        'Technology Strategy',
        'Digital Transformation',
        'Process Optimization',
        'Agile Methodologies',
      ];
    case 'cybersecurity':
      return [
        'Penetration Testing',
        'Security Audits',
        'Encryption',
        'Network Security',
        'Identity Management',
        'Compliance Frameworks',
      ];
    default:
      return [];
  }
}