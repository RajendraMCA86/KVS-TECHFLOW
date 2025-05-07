"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMember } from '@/data';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Twitter, Linkedin, Github } from 'lucide-react';

interface TeamMemberDetailProps {
  member: TeamMember;
}

export default function TeamMemberDetail({ member }: TeamMemberDetailProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
        >
          <div>
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-6">
              <Image
                src={member.image}
                alt={member.name}
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect with {member.name}</h3>
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-[#0077B5]/90 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-[#1DA1F2]/90 transition-colors"
                    >
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.github && (
                    <a 
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#333] text-white p-3 rounded-full hover:bg-[#333]/90 transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">{member.name}</h2>
              <p className="text-primary text-lg font-medium">{member.role}</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-8">{member.bio}</p>
              
              <h3 className="text-2xl font-semibold mb-4">Expertise & Responsibilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getExpertise(member.role).map((item, index) => (
                  <Card key={index} className="bg-gray-50 border-none">
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getExpertise(role: string): { title: string; description: string }[] {
  switch (role) {
    case 'CEO & Founder':
      return [
        {
          title: 'Strategic Leadership',
          description: 'Developing and executing company vision and strategy'
        },
        {
          title: 'Business Development',
          description: 'Identifying growth opportunities and building partnerships'
        },
        {
          title: 'Team Management',
          description: 'Building and leading high-performing teams'
        },
        {
          title: 'Innovation',
          description: 'Driving technological innovation and digital transformation'
        }
      ];
    case 'CTO':
      return [
        {
          title: 'Technical Strategy',
          description: 'Defining technical direction and architecture'
        },
        {
          title: 'Technology Stack',
          description: 'Selecting and implementing modern technology solutions'
        },
        {
          title: 'Security & Compliance',
          description: 'Ensuring robust security practices and compliance'
        },
        {
          title: 'Technical Leadership',
          description: 'Mentoring and leading technical teams'
        }
      ];
    case 'Lead Developer':
      return [
        {
          title: 'Software Architecture',
          description: 'Designing scalable and maintainable systems'
        },
        {
          title: 'Code Quality',
          description: 'Implementing best practices and code standards'
        },
        {
          title: 'Team Leadership',
          description: 'Managing development teams and projects'
        },
        {
          title: 'Technical Innovation',
          description: 'Evaluating and adopting new technologies'
        }
      ];
    case 'UX/UI Designer':
      return [
        {
          title: 'User Experience',
          description: 'Creating intuitive and engaging user experiences'
        },
        {
          title: 'Visual Design',
          description: 'Developing beautiful and consistent visual systems'
        },
        {
          title: 'User Research',
          description: 'Conducting user research and usability testing'
        },
        {
          title: 'Design Systems',
          description: 'Building and maintaining design systems'
        }
      ];
    default:
      return [];
  }
}