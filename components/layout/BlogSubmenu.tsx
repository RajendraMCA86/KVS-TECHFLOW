"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const categories = [
  {
    name: 'Artificail Intelligence',
    href: '/blog/rise-of-ai-in-software-development',
    description: 'Latest in AI chips and hardware innovations'
  },
  {
    name: 'Web Development',
    href: '/blog/nextjs-14-new-era-web-development',
    description: 'Next.js, React, and modern web frameworks'
  },
  {
    name: 'Mobile Development',
    href: '/blog/mobile-development-trends-2024',
    description: 'iOS, Android, and cross-platform development'
  },
  {
    name: 'Cloud & DevOps',
    href: '/blog/devops-evolution-chatops-ai',
    description: 'Cloud infrastructure and DevOps practices'
  },
  {
    name: 'Computing & Quantum',
    href: '/blog/quantum-computing-preparing-tomorrow',
    description: 'AI/ML breakthroughs and applications'
  }
];

export default function BlogSubmenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center space-x-1 font-medium transition-colors"
        aria-expanded={isOpen}
      >
        <span>Blog</span>
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-64 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div className="p-2 space-y-1">
              {categories.map((category) => (
                <Link
                  key={category.href}
                  href={category.href}
                  className="flex flex-col px-4 py-2 text-sm rounded-md  hover:bg-primary/80 transition-colors  text-gray-900 hover:text-white"
                >
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs mt-0.5">{category.description}</span>
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <Link
                href="/blog"
                className="flex items-center px-4 py-2 text-sm text-primary hover:text-white hover:bg-primary/90 rounded-md transition-colors"
              >
                View All Posts →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
