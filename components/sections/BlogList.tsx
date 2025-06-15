"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { motion } from 'framer-motion';
import { ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts, BlogPost } from '@/data';

interface BlogListProps {
  posts?: BlogPost[];
}

export default function BlogList({ posts = blogPosts }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const postsPerPage = 6;
  
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleImageLoad = (postId: string) => {
    setLoadedImages(prev => new Set([...prev, postId]));
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div className="mb-8 relative">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 w-full max-w-md mx-auto"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {currentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="relative h-48 bg-gray-100 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 animate-pulse
                    ${loadedImages.has(post.id) ? 'hidden' : 'block'}`}
                />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className={`object-cover rounded-t-lg transition-opacity duration-300
                    ${loadedImages.has(post.id) ? 'opacity-100' : 'opacity-0'}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index < 3}
                  onLoadingComplete={() => handleImageLoad(post.id)}
                  onError={() => handleImageLoad(post.id)} // Show image even if it errors
                />
                {post.category && (
                  <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                )}
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="hover:text-primary transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">{post.title}</h3>
                </Link>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto">
                <div className="flex items-center justify-between w-full">
                  <Link 
                    href={`/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" className="text-primary hover:text-primary-dark">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <Button
              key={pageNumber}
              variant={pageNumber === currentPage ? "default" : "outline"}
              onClick={() => handlePageChange(pageNumber)}
              className={`w-10 h-10 p-0 ${
                pageNumber === currentPage 
                  ? "bg-primary text-white" 
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {pageNumber}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}