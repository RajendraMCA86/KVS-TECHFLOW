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
import { blogPosts } from '@/data';

export default function BlogList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="relative max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {currentPosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <CardHeader className="pt-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {format(new Date(post.date), 'MMMM dd, yyyy')} | By {post.author}
                      </div>
                      <Link href={`/blog/${post.slug}`}>
                        <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                      </Link>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="text-primary hover:text-primary/90 p-0">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    disabled={currentPage === 1}
                    onClick={() => paginate(currentPage - 1)}
                  >
                    Previous
                  </Button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
                    <Button
                      key={number}
                      variant={currentPage === number ? "default" : "outline"}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </Button>
                  ))}
                  
                  <Button
                    variant="outline"
                    disabled={currentPage === totalPages}
                    onClick={() => paginate(currentPage + 1)}
                  >
                    Next
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold mb-4">No articles found</h3>
            <p className="text-gray-600 mb-8">
              We couldn't find any articles matching your search criteria.
            </p>
            <Button onClick={() => setSearchQuery('')}>Clear Search</Button>
          </div>
        )}
      </div>
    </section>
  );
}