"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent -z-10" />
      
      <motion.div 
        className="container mx-auto text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business with Technology?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Let's discuss how our solutions can help you achieve your business goals.
            Contact us today for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-primary  hover:bg-white/10">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white/10">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}