"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface Job {
  title: string;
  type: string;
  location: string;
  department: string;
  description: string;
  requirements?: string[];
}

const jobs: Job[] = [
  {
    title: "Software Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "We're looking for a Software Engineer to join our team and help build the next generation of our platform.",
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in TypeScript and React",
      "Experience with cloud services (AWS/Azure/GCP)",
      "Understanding of CI/CD practices"
    ]
  },
  {
    title: "Product Designer",
    type: "Full-time",
    location: "Hybrid",
    department: "Design",
    description: "Join our design team to create beautiful and intuitive user experiences for our products.",
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency with Figma and design systems",
      "Experience with user research and testing",
      "Strong portfolio demonstrating product design work"
    ]
  },
  {
    title: "Project Manager",
    type: "Full-time",
    location: "On-site",
    department: "Operations",
    description: "Lead and coordinate project teams to deliver high-quality solutions to our clients.",
    requirements: [
      "4+ years of project management experience",
      "PMP certification preferred",
      "Strong communication and leadership skills",
      "Experience with Agile methodologies"
    ]
  },
  {
    title: "DevOps Engineer",
    type: "Full-time",
    location: "Remote",
    department: "Engineering",
    description: "Help us build and maintain our cloud infrastructure and deployment pipelines.",
    requirements: [
      "3+ years of DevOps experience",
      "Experience with Kubernetes and Docker",
      "Strong scripting skills (Python, Bash)",
      "Knowledge of infrastructure as code"
    ]
  }
];

export default function Careers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                    <p className="text-sm text-gray-500">{job.department}</p>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {job.type}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{job.description}</p>
                
                {job.requirements && (
                  <div className="mb-4 flex-grow">
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="mt-4">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <Button
  variant="outline"
  size="lg"
  onClick={() => {
    const email = 'hr@kvstechflow.com';
    const subject = encodeURIComponent('Resume Submission');
    const body = encodeURIComponent('Dear HR,\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]');
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }}
>
  Apply Now
</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-4">Don't see the right position?</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for talented individuals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>

          <Button
        variant="outline"
        size="lg"
        onClick={() => {
          const email = 'hr@kvstechflow.com';
          const subject = encodeURIComponent('Resume Submission');
          const body = encodeURIComponent('Dear HR,\n\nPlease find my resume attached.\n\nBest regards,\n[Your Name]');
          window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }}
      >
        Send us your Resume
      </Button>
        </motion.div>
      </div>
    </section>
  );
}
