"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (    <motion.section 
      ref={ref}
      style={{ scale, opacity }}
      className="relative min-h-[60vh] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900  py-20 md:py-32 overflow-hidden"
    >

      <div className="container relative mx-auto text-center text-white">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-6 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h1>
        
        {description && (
          <motion.p 
            className="text-lg md:text-xl max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </motion.section>
  );
}