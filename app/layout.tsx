import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import { Toaster } from '@/components/ui/toaster';
import { Chatbot } from '@/components/ui/chat-bot';

// Font configuration
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Metadata for SEO
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'KVS Techflow IT Solution - Innovative Technology Solutions',
  description: 'KVS Techflow IT Solution provides cutting-edge technology services, custom software development, IT consulting, and digital transformation solutions for businesses of all sizes.',
  keywords: 'IT solutions, software development, web development, IT consulting, digital transformation, technology services, KVS Techflow',
  authors: [{ name: 'KVS Techflow IT Solution' }],
  creator: 'KVS Techflow IT Solution',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kvstechflow.com',
    title: 'KVS Techflow IT Solution - Innovative Technology Solutions',
    description: 'KVS Techflow IT Solution provides cutting-edge technology services, custom software development, IT consulting, and digital transformation solutions for businesses of all sizes.',
    siteName: 'KVS Techflow IT Solution',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KVS Techflow IT Solution - Innovative Technology Solutions',
    description: 'KVS Techflow IT Solution provides cutting-edge technology services, custom software development, IT consulting, and digital transformation solutions for businesses of all sizes.',
    creator: '@kvstechflow',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${inter.variable} font-poppins min-h-screen bg-white`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Chatbot />
        <Toaster />
      </body>
    </html>
  );
}