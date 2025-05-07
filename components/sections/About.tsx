"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Team working together"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 mb-6">
                KVS Techflow IT Solution is a forward-thinking technology company that delivers innovative 
                IT solutions to businesses of all sizes. With years of industry experience and a team of 
                highly skilled professionals, we empower organizations to leverage technology for growth 
                and competitive advantage.
              </p>
              <p className="text-gray-600 mb-8">
                Our approach combines technical expertise with strategic thinking to create customized 
                solutions that address your specific business challenges and objectives.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg">Expert Team</h4>
                    <p className="text-gray-600">Highly skilled professionals with deep industry knowledge</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg">Custom Solutions</h4>
                    <p className="text-gray-600">Tailored technology solutions for your unique needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-lg">Customer-Focused</h4>
                    <p className="text-gray-600">Dedicated to your success and satisfaction</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}