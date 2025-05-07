import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/layout/PageHeader';
import BlogPost from '@/components/sections/BlogPost';
import { blogPosts } from '@/data';

export const generateMetadata = ({ params }: { params: { slug: string } }): Metadata => {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found | KVS Techflow IT Solution',
      description: 'The requested blog post could not be found.',
    };
  }
  
  return {
    title: `${post.title} | KVS Techflow IT Solution`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  return (
    <>
      <PageHeader 
        title={post.title} 
        description={`Published on ${post.date} by ${post.author}`}
      />
      <BlogPost post={post} />
    </>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}