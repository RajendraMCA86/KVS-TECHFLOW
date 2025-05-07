"use client";

import { motion } from 'framer-motion';
import { services } from '@/data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MonitorSmartphone, Cloud, Code, LineChart, Server } from 'lucide-react';

export default function ServicesList() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const iconComponents = {
    MonitorSmartphone,
    Cloud,
    Code,
    LineChart,
    Server
  };

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {services.map((service, index) => {
          const IconComponent = iconComponents[service.icon as keyof typeof iconComponents];
          const isEven = index % 2 === 0;
          
          return (
            <motion.div 
              key={service.id}
              id={service.id}
              className="mb-20 scroll-mt-20"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                <div className={isEven ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-6">{service.title}</h2>
                  <p className="text-gray-600 mb-8">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <Card key={index} className="bg-gray-50 border-none">
                        <CardContent className="pt-6">
                          <p className="text-gray-800">{feature}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div className={isEven ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                  <div className="bg-gradient-to-r from-primary/20 to-primary/5 p-8 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">What We Offer</h3>
                    <ul className="space-y-4">
                      {service.offerings.map((offering, index) => (
                        <li key={index} className="flex items-start">
                          <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold">{offering.title}</h4>
                            <p className="text-gray-600">{offering.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}