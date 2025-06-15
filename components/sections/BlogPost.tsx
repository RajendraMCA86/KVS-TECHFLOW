"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BlogPost as BlogPostType } from '@/data';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="py-16">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-6 -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
              </Button>
            </Link>
            
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                By {post.author.name}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                5 min read
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>
              <div className="mt-8">
              <p className="mb-6 text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-semibold mb-6">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm">
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                LinkedIn
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}