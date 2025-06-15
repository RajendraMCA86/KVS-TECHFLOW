export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  image: string;
  slug: string;
  tags: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  }
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  description: string;
  features: string[];
  offerings: {
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code",
    shortDescription: "Custom web solutions to meet your business needs",
    description: "We create custom web applications and websites that are tailored to your business needs. Our development team uses the latest technologies to deliver high-performance, scalable, and secure web solutions.",
    features: [
      "Responsive design for all devices",
      "User-friendly interfaces",
      "SEO optimization",
      "Content management systems",
      "E-commerce solutions"
    ],
    offerings: [
      {
        title: "Custom Web Applications",
        description: "Tailor-made solutions for your unique business requirements"
      },
      {
        title: "E-commerce Websites",
        description: "Secure online stores with payment gateway integrations"
      },
      {
        title: "Progressive Web Apps",
        description: "Fast, reliable, and engaging web experiences"
      },
      {
        title: "Website Redesign",
        description: "Modernize your existing website for better performance"
      }
    ]
  },
  {
    id: "mobile-apps",
    title: "Mobile Applications",
    icon: "MonitorSmartphone",
    shortDescription: "Native and cross-platform mobile solutions",
    description: "Our mobile app development services help you reach your customers on their preferred devices. We develop native and cross-platform applications that deliver exceptional user experiences.",
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "Intuitive user interfaces",
      "Offline functionality",
      "Push notifications"
    ],
    offerings: [
      {
        title: "Native Apps",
        description: "High-performance applications for iOS and Android"
      },
      {
        title: "Cross-Platform Development",
        description: "Cost-effective solutions that work on multiple platforms"
      },
      {
        title: "App Redesign & Optimization",
        description: "Improve performance and user experience of existing apps"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing support to keep your apps running smoothly"
      }
    ]
  },
  {
    id: "cloud-services",
    title: "Cloud Solutions",
    icon: "Cloud",
    shortDescription: "Scalable and secure cloud infrastructure",
    description: "We help businesses leverage the power of cloud computing to enhance scalability, reduce costs, and improve operational efficiency. Our cloud solutions are tailored to your specific requirements.",
    features: [
      "Cloud migration",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Cloud security",
      "Disaster recovery"
    ],
    offerings: [
      {
        title: "Cloud Migration",
        description: "Seamless transition of your applications and data to the cloud"
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable and reliable infrastructure for your applications"
      },
      {
        title: "Serverless Computing",
        description: "Event-driven applications without managing servers"
      },
      {
        title: "Cloud Security",
        description: "Protect your cloud resources from threats and vulnerabilities"
      }
    ]
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    icon: "LineChart",
    shortDescription: "Strategic technology guidance for business success",
    description: "Our IT consulting services provide strategic guidance on technology investments, digital transformation, and IT infrastructure optimization. We help you make informed decisions that align with your business goals.",
    features: [
      "Technology roadmapping",
      "Digital transformation",
      "IT strategy development",
      "Process optimization",
      "Technical analysis"
    ],
    offerings: [
      {
        title: "Digital Transformation",
        description: "Strategize and implement technologies to transform your business"
      },
      {
        title: "IT Strategy",
        description: "Align your technology investments with business objectives"
      },
      {
        title: "Process Optimization",
        description: "Improve efficiency through automation and streamlined workflows"
      },
      {
        title: "Technical Due Diligence",
        description: "Comprehensive assessment of technologies and infrastructure"
      }
    ]
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "Server",
    shortDescription: "Protect your business from digital threats",
    description: "Our cybersecurity services help you protect your business from evolving cyber threats. We implement robust security measures to safeguard your data, systems, and network infrastructure.",
    features: [
      "Security assessments",
      "Penetration testing",
      "Vulnerability management",
      "Security monitoring",
      "Incident response"
    ],
    offerings: [
      {
        title: "Security Assessments",
        description: "Identify vulnerabilities in your systems and applications"
      },
      {
        title: "Managed Security Services",
        description: "Ongoing monitoring and protection against threats"
      },
      {
        title: "Security Training",
        description: "Educate your team on security best practices"
      },
      {
        title: "Compliance Management",
        description: "Ensure adherence to industry regulations and standards"
      }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "John has over 15 years of experience in the technology industry, with a background in software engineering and business management. He founded KVS Techflow with a vision to help businesses leverage technology for growth and innovation.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "team-2",
    name: "Sarah Johnson",
    role: "CTO",
    image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Sarah is a technology leader with extensive experience in software architecture, cloud computing, and emerging technologies. She leads our technical team and ensures we deliver high-quality solutions that meet our clients' needs.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "team-3",
    name: "David Chen",
    role: "Lead Developer",
    image: "https://images.pexels.com/photos/2834009/pexels-photo-2834009.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "David is an expert in full-stack development with a passion for creating clean, efficient, and scalable code. He leads our development team and is responsible for implementing best practices and ensuring code quality.",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com"
    }
  },
  {
    id: "team-4",
    name: "Emily Rodriguez",
    role: "UX/UI Designer",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    bio: "Emily is a creative designer with a keen eye for detail and user experience. She combines visual design with user research to create intuitive and engaging interfaces that delight users and achieve business goals.",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Michael Thompson",
    company: "Global Tech Solutions",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "KVS Techflow transformed our business with their innovative solutions. Their team took the time to understand our challenges and delivered a custom solution that exceeded our expectations. We've seen a 40% increase in operational efficiency since implementation.",
    rating: 5
  },
  {
    id: "testimonial-2",
    name: "Jennifer Wilson",
    company: "E-Commerce Ventures",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Working with KVS Techflow has been a game-changer for our e-commerce platform. Their expertise in web development and cloud solutions helped us scale our business and improve customer experiences. They're responsive, professional, and deliver quality work.",
    rating: 5
  },
  {
    id: "testimonial-3",
    name: "Robert Garcia",
    company: "Financial Services Inc.",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    quote: "Security was our main concern, and KVS Techflow delivered a comprehensive solution that protected our sensitive data while improving system performance. Their cybersecurity team is knowledgeable and thorough. I highly recommend their services.",
    rating: 4
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Rise of AI in Software Development",
    excerpt: "How artificial intelligence is transforming the way we write and maintain code, from automated testing to intelligent code completion.",
    category: "tech",
    date: "2025-1-15",
    author: {
      name: "Dr. Alex Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "8 min",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "rise-of-ai-in-software-development",
    tags: ["AI", "Software Development", "Automation", "Programming"]
  },
  {
    id: "2",
    title: "Next.js 14: A New Era of Web Development",
    excerpt: "Exploring the groundbreaking features in Next.js 14, including improved server components and enhanced development experience.",
    category: "web-dev",
    date: "2025-2-28",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "7 min",
    image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "nextjs-14-new-era-web-development",
    tags: ["Web Development", "Next.js", "React", "JavaScript"]
  },
  {
    id: "3",
    title: "Quantum Computing: Preparing for Tomorrow",
    excerpt: "Understanding quantum computing basics and how businesses can prepare for the quantum revolution in computing.",
    category: "tech",
    date: "2025-03-15",
    author: {
      name: "Mike Zhang",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "10 min",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "quantum-computing-preparing-tomorrow",
    tags: ["Quantum Computing", "Technology", "Future Tech", "Innovation"]
  },
  {
    id: "4",
    title: "DevOps Evolution: ChatOps and AI Integration",
    excerpt: "How AI-powered chat operations are revolutionizing DevOps practices and improving team collaboration.",
    category: "cloud",
    date: "2025-01-22",
    author: {
      name: "Dr. Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "6 min",
    image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "devops-evolution-chatops-ai",
    tags: ["DevOps", "ChatOps", "AI", "Automation"]
  },
  {
    id: "5",
    title: "Mobile Development Trends for 2024",
    excerpt: "Key mobile development trends that will shape the industry in 2024, from cross-platform solutions to AI integration.",
    category: "mobile-dev",
    date: "2025-04-30",
    author: {
      name: "Lisa Park",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "7 min",
    image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "mobile-development-trends-2024",
    tags: ["Mobile Development", "Cross-Platform", "Flutter", "React Native"]
  },
  {
    id: "6",
    title: "The Future of Edge Computing",
    excerpt: "Exploring how edge computing is transforming data processing and enabling new real-time applications.",
    category: "tech",
    date: "2025-04-15",
    author: {
      name: "Robert Martinez",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    readTime: "8 min",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1600",
    slug: "future-of-edge-computing",
    tags: ["Edge Computing", "IoT", "Cloud", "Infrastructure"]
  }
];