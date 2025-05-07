export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  meta: {
    title: string;
    description: string;
    keywords: string[];
  }
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
    id: "blog-1",
    title: "The Future of Cloud Computing: Trends to Watch",
    slug: "future-of-cloud-computing",
    excerpt: "Explore emerging trends in cloud computing and how they're shaping the future of business technology infrastructure.",
    content: "Cloud computing has evolved significantly over the past decade, transforming from a novel concept to an essential component of modern business infrastructure. As we look to the future, several key trends are emerging that will shape the next generation of cloud technologies and services.\n\nMulti-cloud and hybrid cloud strategies are becoming increasingly popular as organizations seek to optimize performance, cost, and flexibility. Rather than relying on a single cloud provider, businesses are strategically distributing workloads across multiple platforms to leverage the unique strengths of each provider and avoid vendor lock-in.\n\nServerless computing continues to gain traction, allowing developers to focus on writing code without worrying about the underlying infrastructure. This approach offers benefits in terms of scalability, cost-efficiency, and reduced operational overhead, making it an attractive option for many applications.\n\nEdge computing is extending cloud capabilities closer to where data is generated and consumed. By processing data at the network edge, organizations can reduce latency, conserve bandwidth, and enable real-time processing for IoT devices and applications that require immediate responsiveness.\n\nAI and machine learning integration is enhancing cloud services with intelligent capabilities. Cloud providers are embedding AI throughout their platforms, enabling businesses to leverage advanced analytics, natural language processing, computer vision, and other AI capabilities without significant upfront investment.\n\nSecurity and compliance remain top priorities as cloud adoption grows. Cloud providers are investing heavily in advanced security features, compliance certifications, and tools that help organizations protect their data and applications in increasingly complex environments.\n\nAs these trends continue to evolve, businesses that stay informed and adapt their cloud strategies accordingly will be well-positioned to leverage the full potential of cloud computing for innovation, efficiency, and competitive advantage.",
    author: "Sarah Johnson",
    date: "2023-09-15",
    image: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "The Future of Cloud Computing: Trends to Watch | KVS Techflow",
      description: "Explore emerging trends in cloud computing and how they're shaping the future of business technology infrastructure.",
      keywords: ["cloud computing", "multi-cloud", "serverless", "edge computing", "AI integration"]
    }
  },
  {
    id: "blog-2",
    title: "Web Development Best Practices for 2023",
    slug: "web-development-best-practices-2023",
    excerpt: "Stay ahead of the curve with these essential web development practices that will define successful projects in 2023.",
    content: "Web development continues to evolve at a rapid pace, with new technologies, frameworks, and methodologies emerging regularly. As we move further into 2023, several best practices have become essential for delivering high-quality web applications that meet modern user expectations.\n\nPerformance optimization remains a top priority, with users expecting near-instant loading times across all devices. Techniques such as code splitting, lazy loading, image optimization, and efficient caching strategies are crucial for delivering a fast, responsive user experience. Tools like Lighthouse and WebPageTest should be incorporated into your development workflow to identify and address performance bottlenecks.\n\nAccessibility is no longer optional—it's a fundamental aspect of responsible web development. Websites should be usable by people of all abilities, which means implementing proper semantic HTML, keyboard navigation, appropriate color contrast, alternative text for images, and support for screen readers. The Web Content Accessibility Guidelines (WCAG) 2.1 Level AA should be your minimum standard.\n\nResponsive design has evolved beyond basic mobile adaptation to encompass a true device-agnostic approach. Modern responsive design considers not just screen sizes but also different input methods, network conditions, and device capabilities. Techniques like container queries, fluid typography, and adaptive loading are becoming increasingly important.\n\nSecurity best practices are essential in an era of increasing cyber threats. This includes implementing HTTPS, using Content Security Policy (CSP), validating user inputs, protecting against common vulnerabilities like XSS and CSRF, and keeping dependencies updated to patch known security issues.\n\nJamstack architecture continues to gain popularity for its performance, security, and developer experience benefits. By pre-rendering pages and leveraging APIs and serverless functions, Jamstack sites deliver faster loading times and reduced server dependencies.\n\nBy incorporating these best practices into your web development process, you'll be well-positioned to create websites and applications that are fast, accessible, secure, and provide exceptional user experiences across all devices and platforms.",
    author: "David Chen",
    date: "2023-08-22",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "Web Development Best Practices for 2023 | KVS Techflow",
      description: "Stay ahead of the curve with these essential web development practices that will define successful projects in 2023.",
      keywords: ["web development", "performance optimization", "accessibility", "responsive design", "security"]
    }
  },
  {
    id: "blog-3",
    title: "How AI is Transforming Business Operations",
    slug: "ai-transforming-business-operations",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for efficiency and innovation.",
    content: "Artificial intelligence (AI) is no longer a futuristic concept—it's a practical technology that's transforming how businesses operate across virtually every industry. From automating routine tasks to enabling data-driven decision making, AI is helping organizations become more efficient, responsive, and innovative.\n\nProcess automation is one of the most immediate and impactful applications of AI in business operations. Machine learning algorithms can automate repetitive, rule-based tasks with greater speed and accuracy than human workers. This includes data entry, document processing, email sorting, appointment scheduling, and basic customer service inquiries. By freeing employees from these routine activities, businesses can redirect human talent toward more strategic, creative, and high-value work.\n\nCustomer experience is being revolutionized through AI-powered personalization and service. AI analyzes customer data to deliver tailored product recommendations, personalized marketing messages, and customized user experiences. Chatbots and virtual assistants provide 24/7 customer support, handling common questions and issues while seamlessly escalating complex matters to human agents when necessary. These AI solutions not only reduce operational costs but also improve customer satisfaction through faster response times and more relevant interactions.\n\nPredictive analytics represents another transformative application of AI. By analyzing historical data patterns, AI systems can forecast future trends, identify potential issues before they occur, and recommend preventive actions. This capability is valuable across numerous functions, from predicting equipment maintenance needs to forecasting inventory requirements, anticipating customer churn, or identifying emerging market opportunities. Armed with these insights, businesses can shift from reactive to proactive management strategies.\n\nSupply chain and logistics operations are being optimized through AI-driven solutions that enhance efficiency and resilience. AI algorithms can optimize routing, predict delivery times, manage inventory levels, and identify potential disruptions before they impact operations. During the global supply chain challenges of recent years, organizations with AI-enhanced supply chain capabilities demonstrated greater adaptability and maintained higher service levels than their competitors.\n\nWhile implementing AI successfully requires careful planning, clear objectives, and appropriate data infrastructure, the potential benefits are substantial. Organizations that strategically incorporate AI into their operations can achieve significant competitive advantages through improved efficiency, enhanced customer experiences, and data-driven innovation.",
    author: "John Smith",
    date: "2023-07-10",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "How AI is Transforming Business Operations | KVS Techflow",
      description: "Discover how artificial intelligence is revolutionizing business processes and creating new opportunities for efficiency and innovation.",
      keywords: ["artificial intelligence", "business operations", "process automation", "predictive analytics", "customer experience"]
    }
  },
  {
    id: "blog-4",
    title: "Cybersecurity Essentials for Small Businesses",
    slug: "cybersecurity-essentials-small-businesses",
    excerpt: "Learn the fundamental cybersecurity measures that every small business should implement to protect against common digital threats.",
    content: "Small businesses are increasingly becoming targets for cyberattacks, with nearly 43% experiencing a breach according to recent studies. Despite this growing threat, many small business owners believe they're too small to be targeted or lack the resources for effective cybersecurity. This misconception leaves them particularly vulnerable.\n\nImplementing basic cybersecurity measures doesn't have to be complicated or expensive. Start with strong password policies that require complex, unique passwords for all accounts, and implement multi-factor authentication (MFA) wherever possible. These two simple steps can prevent the majority of common attacks.\n\nRegular software updates are crucial for security. Cybercriminals often exploit known vulnerabilities in outdated software. Enable automatic updates for all operating systems, applications, and devices to ensure security patches are promptly installed.\n\nEmployee training is perhaps the most important security measure any business can implement. Human error remains the leading cause of security breaches, often through phishing attacks. Regular security awareness training helps employees recognize suspicious emails, links, and attachments, and understand proper security protocols.\n\nData backup and recovery plans are essential safeguards against ransomware and other data loss scenarios. Implement an automated backup solution that follows the 3-2-1 rule: maintain at least three copies of your data, on two different types of media, with one copy stored off-site or in the cloud.\n\nNetwork security doesn't need to be complex. Start with a business-grade firewall, secure Wi-Fi with strong encryption (WPA3 if possible), and network segmentation to separate sensitive data from general operations. Consider using a VPN for remote workers to ensure secure connections to your business network.\n\nIncident response planning is often overlooked but critically important. Having a clear plan for how to respond to different types of security incidents can significantly reduce damage and recovery time. Document steps for containing breaches, communicating with stakeholders, and restoring operations.\n\nBy implementing these foundational cybersecurity measures, small businesses can substantially reduce their vulnerability to common attacks and better protect their operations, data, and customers. Remember that cybersecurity is an ongoing process, not a one-time project—regular reviews and updates to your security measures are essential as threats continue to evolve.",
    author: "Michael Reynolds",
    date: "2023-06-18",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "Cybersecurity Essentials for Small Businesses | KVS Techflow",
      description: "Learn the fundamental cybersecurity measures that every small business should implement to protect against common digital threats.",
      keywords: ["cybersecurity", "small business", "data protection", "network security", "password policies"]
    }
  },
  {
    id: "blog-5",
    title: "Digital Transformation: A Strategic Approach",
    slug: "digital-transformation-strategic-approach",
    excerpt: "Explore how businesses can navigate digital transformation successfully with a well-planned strategic approach.",
    content: "Digital transformation has moved beyond buzzword status to become an essential business imperative. However, studies show that 70% of digital transformation initiatives fail to reach their goals. The difference between success and failure often lies not in the technology itself, but in the strategic approach organizations take.\n\nSuccessful digital transformation begins with clear vision and leadership commitment. Transformation initiatives must align with core business objectives and receive visible support from senior leadership. Without this foundation, digital projects risk becoming isolated technology upgrades rather than true business transformation.\n\nCustomer-centricity should drive transformation priorities. The most successful digital initiatives focus on enhancing customer experiences and addressing pain points in the customer journey. This approach ensures that technology investments deliver tangible value rather than pursuing innovation for its own sake.\n\nAgility and iteration are essential components of effective digital transformation. Rather than attempting wholesale change in one massive initiative, successful organizations implement changes incrementally, learn from each phase, and adjust subsequent steps accordingly. This approach reduces risk and allows for course corrections based on real-world feedback.\n\nOrganizational culture plays a crucial role in digital transformation success. Technology alone cannot transform a business; people must embrace new ways of working. This requires intentional culture change focused on fostering innovation, collaboration, data-driven decision making, and continuous learning.\n\nData strategy forms the backbone of digital transformation. Before implementing advanced analytics or AI solutions, organizations need a solid data foundation that ensures data quality, accessibility, governance, and security. Without reliable data, even the most sophisticated digital tools will fail to deliver value.\n\nTechnology selection should follow strategy, not lead it. Many transformation efforts falter because organizations choose technologies before clearly defining their objectives. The right approach is to first identify specific business outcomes, then select technologies that support those goals.\n\nMeasurement frameworks help track progress and demonstrate value. Effective digital transformation requires clearly defined metrics aligned with business objectives, regular assessment of progress, and willingness to adjust course based on results.\n\nBy embracing these strategic principles, organizations can navigate the complexities of digital transformation more successfully and realize the full potential of technology to drive business growth and innovation.",
    author: "Jessica Martinez",
    date: "2023-05-29",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "Digital Transformation: A Strategic Approach | KVS Techflow",
      description: "Explore how businesses can navigate digital transformation successfully with a well-planned strategic approach.",
      keywords: ["digital transformation", "business strategy", "customer-centricity", "organizational culture", "data strategy"]
    }
  },
  {
    id: "blog-6",
    title: "Mobile App Development Trends for 2023",
    slug: "mobile-app-development-trends-2023",
    excerpt: "Stay informed about the latest trends shaping mobile app development and how they can enhance your mobile strategy.",
    content: "The mobile app landscape continues to evolve rapidly, driven by technological advancements, changing user preferences, and new business requirements. For organizations developing or updating mobile applications in 2023, several key trends are worth monitoring and potentially incorporating into your mobile strategy.\n\n5G technology is enabling a new generation of mobile experiences. With speeds up to 100 times faster than 4G and significantly reduced latency, 5G makes previously challenging features viable for mobile apps, including high-definition video streaming, augmented reality, virtual reality, and real-time collaboration. Apps optimized for 5G can offer more immersive, responsive experiences than were previously possible on mobile devices.\n\nAugmented Reality (AR) is moving beyond novelty to practical applications. Furniture retailers use AR to help customers visualize products in their homes, beauty brands offer virtual try-on experiences, and navigation apps overlay directions onto real-world views. As AR frameworks become more sophisticated and easier to implement, we'll see this technology integrated into many more everyday applications.\n\nSuper Apps are gaining popularity, particularly in markets outside North America. These all-in-one platforms combine multiple services within a single app ecosystem, allowing users to accomplish many different tasks without switching applications. While WeChat and Alipay pioneered this approach in China, we're seeing similar models emerge globally as companies look to increase user engagement and create new revenue streams.\n\nCross-platform development continues to mature as frameworks like React Native, Flutter, and Kotlin Multiplatform improve in performance and capability. These tools allow developers to write code once and deploy across iOS and Android platforms, significantly reducing development time and maintenance costs while maintaining near-native performance.\n\nApp privacy and security are receiving increased attention from both users and regulators. With stricter data protection regulations and growing user awareness about privacy issues, developers must implement robust security measures and transparent privacy practices. Features like on-device processing, minimized data collection, and clear privacy controls are becoming competitive advantages.\n\nAI and machine learning integration is enhancing mobile apps with personalization, predictive features, and automation. From content recommendations to predictive text, voice recognition, image analysis, and chatbots, AI capabilities are becoming standard components of sophisticated mobile applications.\n\nFoldable device optimization is an emerging consideration as foldable smartphones and dual-screen devices gain market share. These formats create new possibilities for multitasking, expanded views, and innovative user interfaces that developers can leverage to create more productive and engaging app experiences.\n\nBy staying informed about these trends and thoughtfully incorporating relevant innovations into your mobile strategy, you can create apps that not only meet current user expectations but also position your organization at the forefront of mobile experience.",
    author: "Emily Rodriguez",
    date: "2023-04-12",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    meta: {
      title: "Mobile App Development Trends for 2023 | KVS Techflow",
      description: "Stay informed about the latest trends shaping mobile app development and how they can enhance your mobile strategy.",
      keywords: ["mobile app development", "5G technology", "augmented reality", "cross-platform development", "app privacy"]
    }
  }
];