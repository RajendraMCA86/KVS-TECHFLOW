"use client";

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import PageHeader from '@/components/layout/PageHeader';
import { getPostsByCategory } from '@/data/blogUtils';
import BlogList from '@/components/sections/BlogList';

export default function BlogCategoryPage() {
  const params = useParams();
  const category = params.category as string;
  const posts = getPostsByCategory(category);

  const categoryTitles: { [key: string]: string } = {
    'tech': 'AI & Hardware',
    'web-dev': 'Web Development',
    'mobile-dev': 'Mobile Development',
    'cloud': 'Cloud & DevOps',
    'ai': 'Artificial Intelligence'
  };

  const descriptions: { [key: string]: string } = {
    'tech': 'Latest developments in AI hardware and technology innovations',
    'web-dev': 'Modern web development trends, frameworks, and best practices',
    'mobile-dev': 'Mobile app development insights and platform updates',
    'cloud': 'Cloud computing advancements and DevOps strategies',
    'ai': 'Breakthrough developments in artificial intelligence and machine learning'
  };

  return (
    <div>
      <PageHeader 
        title={categoryTitles[category] || category}
        description={descriptions[category]}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto py-16 px-4"
      >
        <BlogList posts={posts} />
      </motion.div>
    </div>

  );
}
