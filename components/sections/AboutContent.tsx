"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutContent() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2015, KVS Techflow IT Solution started with a vision to bridge the gap between complex 
              technology and business needs. What began as a small team of passionate technologists has grown 
              into a comprehensive IT solutions provider serving clients across multiple industries.
            </p>
            <p className="text-gray-600 mb-6">
              Our journey has been defined by continuous learning, innovation, and a steadfast commitment 
              to delivering exceptional value to our clients. We've evolved our service offerings to meet 
              the changing technology landscape while maintaining our core values of excellence, integrity, 
              and client satisfaction.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6">
              To empower businesses through innovative technology solutions that drive growth, efficiency, 
              and competitive advantage. We are committed to delivering exceptional value through our expertise, 
              reliability, and customer-centric approach.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              To be the trusted technology partner for businesses worldwide, known for our innovative solutions, 
              technical excellence, and unwavering commitment to client success.
            </p>
            
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Team collaboration"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="font-semibold">Excellence</h4>
                    <p className="text-gray-600">We strive for excellence in every aspect of our work</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-gray-600">We embrace innovation and creative problem-solving</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="font-semibold">Integrity</h4>
                    <p className="text-gray-600">We operate with honesty, transparency, and ethical standards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white mr-3 flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="font-semibold">Client-Centric</h4>
                    <p className="text-gray-600">We prioritize our clients' needs and success</p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}