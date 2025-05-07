import { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import BlogList from '@/components/sections/BlogList';

export const metadata: Metadata = {
  title: 'Blog | KVS Techflow IT Solution',
  description: 'Stay updated with the latest technology trends, insights, and news from KVS Techflow IT Solution.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader 
        title="Our Blog" 
        description="Insights, news and the latest tech trends"
      />
      <BlogList />
    </>
  );
}