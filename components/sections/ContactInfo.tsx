"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactInfo() {
  const contactItems = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: 'Email Us',
      content: 'info@kvstechflow.com',
      link: 'mailto:info@kvstechflow.com',
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: 'Call Us',
      content: '+91 8458829844',
      link: 'tel:+91 8458829844',
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: 'Visit Us',
      content: 'House No. FW/27, Supercity, Dhaabli, Mangalia, Indore - 453771, M.P.',
      link: 'https://maps.google.com',
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: 'Business Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
      <p className="text-gray-600 mb-8">
        Have questions or need assistance? Reach out to us through any of the channels below, 
        and our team will be happy to help you.
      </p>
      
      <div className="space-y-8">
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="flex items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="bg-primary/10 p-3 rounded-lg mr-4">
              {item.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {item.link ? (
                <a 
                  href={item.link} 
                  className="text-gray-600 hover:text-primary transition-colors"
                  target={item.link.startsWith('http') ? '_blank' : undefined}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.content}
                </a>
              ) : (
                <p className="text-gray-600">{item.content}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
        <div className="flex space-x-4">
          <a href="#" className="bg-gray-100 hover:bg-primary/10 transition-colors p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-primary/10 transition-colors p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-primary/10 transition-colors p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="bg-gray-100 hover:bg-primary/10 transition-colors p-3 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}