export const chatbotConfig = {
  settings: {
    greeting: "Hello! I'm the KVS Techflow virtual assistant. How can I help you today?",
    fallbackResponse: "I apologize, but I'm not sure about that. Would you like to speak with one of our experts?",
    teamIntro: "Our team of experts is here to help you with your technology needs."
  },
  intelligence: {
    personalization: {
      timeBasedGreetings: {
        morning: "Good morning! How can KVS Techflow assist you today?",
        afternoon: "Good afternoon! Welcome to KVS Techflow. What brings you here today?",
        evening: "Good evening! Thank you for reaching out to KVS Techflow. How may I help?",
        night: "Hi there! Even at this hour, KVS Techflow is here to help. What can I do for you?"
      },
      contextAwareness: {
        returning: "Welcome back! Great to see you again.",
        new: "Welcome to KVS Techflow! I'm here to help you explore our services."
      },
      industrySpecificResponses: {
        healthcare: {
          focus: "HIPAA compliance and secure patient data management",
          solutions: ["Secure medical records systems", "Healthcare app development", "Telemedicine platforms"]
        },
        finance: {
          focus: "Secure transactions and regulatory compliance",
          solutions: ["Banking software solutions", "FinTech applications", "Regulatory compliance systems"]
        },
        retail: {
          focus: "E-commerce and customer experience",
          solutions: ["Online store platforms", "Inventory management systems", "Customer analytics"]
        },
        manufacturing: {
          focus: "Process automation and efficiency",
          solutions: ["IoT integration", "Supply chain management", "Quality control systems"]
        }
      }
    },
    contextTracking: {
      previousInteractions: true,
      userPreferences: true,
      sessionContext: true,
      urgencyLevels: {
        high: {
          keywords: ["urgent", "emergency", "asap", "critical", "immediately"],
          response: "I understand this is urgent. I'll prioritize your request."
        },
        medium: {
          keywords: ["soon", "next week", "planning", "interested"],
          response: "I'll help you with your request."
        },
        low: {
          keywords: ["sometime", "future", "curious", "just browsing"],
          response: "Take your time! I'm here to help you explore our services."
        }
      },
      intents: {
        services: ["tell me about your services", "what do you offer", "service options"],
        pricing: ["how much does it cost", "pricing", "rates", "packages"],
        contact: ["speak to someone", "contact details", "reach out"],
        support: ["help with", "having issues", "problem with", "support needed"]
      }
    },
    nlp: {
      confidence: {
        threshold: 0.7,
        fallbackThreshold: 0.4
      },
      entities: {
        service: ["web development", "mobile app", "cloud solutions", "consulting"],
        technology: ["react", "node.js", "python", "aws", "azure"],
        industry: ["healthcare", "finance", "education", "retail", "technology"]
      }
    },
    problemSolving: {
      diagnosisPatterns: [
        {
          category: "Technical Issues",
          questions: [
            "Could you describe what specific error you're encountering?",
            "When did you first notice this issue?",
            "Have you made any recent changes to your system?"
          ]
        },
        {
          category: "Service Inquiries",
          questions: [
            "What specific goals do you have for your project?",
            "What is your timeline for implementation?",
            "Do you have any specific technical requirements?"
          ]
        }
      ],
      solutionFramework: {
        assessment: ["Identify core issue", "Gather context", "Determine urgency"],
        resolution: ["Provide immediate solution if available", "Escalate to appropriate team", "Follow up"],
        prevention: ["Document solution", "Suggest preventive measures", "Schedule check-ins"]
      }
    },
    enhancedResponses: {
      technicalGuidance: [
        "Let me walk you through the technical aspects step by step.",
        "I'll explain this in a way that's easy to understand.",
        "Here's a detailed breakdown of how this works."
      ],
      empathyPhrases: [
        "I understand how challenging this situation can be.",
        "Your concern about {issue} is completely valid.",
        "I'm here to help you find the best solution."
      ],
      confidenceBuilding: [
        "We have extensive experience handling similar situations.",
        "Our team has successfully implemented this solution for many clients.",
        "Let me share a relevant success story with you."
      ]
    }
  },
  serviceCategories: {
    webDevelopment: {
      title: "Web Development",
      description: "We create custom web applications and websites that are tailored to your business needs. Our development team uses the latest technologies to deliver high-performance, scalable, and secure web solutions.",
      capabilities: [
        "Full-stack web development",
        "Responsive design",
        "UX optimization",
        "SEO and accessibility",
        "Database design"
      ],
      services: [
        {
          name: "Business Websites",
          description: "Professional websites that represent your brand"
        },
        {
          name: "E-commerce Solutions",
          description: "User-friendly online stores with secure payments"
        },
        {
          name: "Web Applications",
          description: "Custom solutions for your business needs"
        },
        {
          name: "Website Maintenance",
          description: "Regular updates and performance monitoring"
        },
        {
          name: "Technical Consulting",
          description: "Expert guidance on web technologies"
        }
      ],
      faqs: [
        {
          question: "What types of websites do you build?",
          answer: "We develop various types of websites including business websites, e-commerce platforms, web applications, and custom solutions tailored to specific business needs."
        },
        {
          question: "Do you provide website maintenance?",
          answer: "Yes, we offer comprehensive website maintenance services including regular updates, performance monitoring, and technical support."
        }
      ]
    },
    mobileApps: {
      title: "Mobile Applications",
      description: "Our mobile app development services help you reach your customers on their preferred devices. We develop native and cross-platform applications that deliver exceptional user experiences.",
      capabilities: [
        "iOS and Android app development",
        "React Native and Flutter expertise",
        "Mobile UI/UX design",
        "Performance optimization",
        "App store deployment"
      ],
      services: [
        {
          name: "Native Mobile Apps",
          description: "High-performance iOS and Android applications"
        },
        {
          name: "Cross-Platform Development",
          description: "Cost-effective solutions using React Native or Flutter"
        },
        {
          name: "UI/UX Design Services",
          description: "User-centered design with modern mobile patterns"
        },
        {
          name: "App Maintenance & Support",
          description: "Continuous updates and performance optimization"
        }
      ],
      faqs: [
        {
          question: "Do you develop both iOS and Android apps?",
          answer: "Yes, we develop native applications for both iOS and Android platforms, as well as cross-platform solutions using React Native and Flutter."
        },
        {
          question: "What about app maintenance?",
          answer: "We provide comprehensive app maintenance and support services, including regular updates, performance optimization, and technical support."
        }
      ]
    },
    cloudServices: {
      title: "Cloud Solutions",
      description: "We help businesses leverage the power of cloud computing to enhance scalability, reduce costs, and improve operational efficiency. Our cloud solutions are tailored to your specific requirements.",
      capabilities: [
        "AWS and Azure expertise",
        "Cloud infrastructure optimization",
        "Containerization and Kubernetes",
        "DevOps automation",
        "Multi-cloud management"
      ],
      services: [
        {
          name: "Cloud Strategy & Migration",
          description: "Tailored roadmap and seamless cloud transition"
        },
        {
          name: "DevOps Implementation",
          description: "Automated CI/CD pipelines and infrastructure as code"
        },
        {
          name: "Container Orchestration",
          description: "Kubernetes deployment and management services"
        },
        {
          name: "Cloud Cost Optimization",
          description: "Resource optimization and cost management"
        }
      ],
      faqs: [
        {
          question: "What cloud platforms do you support?",
          answer: "We primarily work with AWS and Azure, but our expertise extends to multi-cloud environments and hybrid cloud solutions."
        },
        {
          question: "How can cloud solutions benefit my business?",
          answer: "Cloud solutions can improve scalability, reduce operational costs, enhance security, and provide better flexibility in managing your IT infrastructure."
        },
        {
          question: "What is your approach to cloud migration?",
          answer: "We follow a systematic approach including assessment, planning, migration strategy development, execution, and post-migration optimization."
        }
      ],
      trends2025: [
        "Multi-cloud and hybrid strategies for optimal performance",
        "Serverless computing for reduced operational overhead",
        "Edge computing for improved latency and bandwidth",
        "AI/ML integration in cloud services",
        "Enhanced security measures and compliance"
      ]
    },
    itConsulting: {
      title: "IT Consulting",
      description: "Our IT consulting services provide strategic guidance on technology investments, digital transformation, and IT infrastructure optimization. We help you make informed decisions that align with your business goals.",
      capabilities: [
        "IT systems assessment",
        "Software selection",
        "Cost optimization",
        "Technology training",
        "Vendor management"
      ],
      services: [
        {
          name: "Technology Assessment",
          description: "Review and optimize your current IT systems"
        },
        {
          name: "Software Selection",
          description: "Find the right tools for your business needs"
        },
        {
          name: "IT Cost Management",
          description: "Reduce IT expenses while maintaining quality"
        },
        {
          name: "Staff Training",
          description: "Enhance your team's technical capabilities"
        }
      ],
      faqs: [
        {
          question: "How can IT consulting help my business?",
          answer: "IT consulting helps you make informed technology decisions, optimize your IT infrastructure, reduce costs, and ensure your technology strategy aligns with your business objectives."
        },
        {
          question: "What is your approach to digital transformation?",
          answer: "We focus on clear vision and leadership commitment, customer-centricity, agile implementation, cultural change, and data-driven decision making."
        }
      ],
      transformationPrinciples: [
        "Clear vision and leadership commitment",
        "Customer-centric approach",
        "Agile implementation methodology",
        "Cultural change management",
        "Data-driven decision making",
        "Measured and iterative progress"
      ]
    },
    cybersecurity: {
      title: "Cybersecurity",
      description: "Our cybersecurity services help you protect your business from evolving cyber threats. We implement robust security measures to safeguard your data, systems, and network infrastructure.",
      capabilities: [
        "Real-time threat detection and response",
        "Zero Trust Architecture implementation",
        "Advanced endpoint protection",
        "24/7 security monitoring",
        "Compliance and risk management"
      ],
      services: [
        {
          name: "Security Assessments",
          description: "Comprehensive vulnerability scanning and penetration testing"
        },
        {
          name: "Managed Security Services",
          description: "Proactive threat monitoring and incident response"
        },
        {
          name: "Employee Security Training",
          description: "Interactive training programs to build security awareness"
        },
        {
          name: "GRC Solutions",
          description: "Governance, risk, and compliance management services"
        }
      ],
      faqs: [
        {
          question: "What are essential cybersecurity measures for small businesses?",
          answer: "Essential measures include strong password policies, multi-factor authentication, regular software updates, employee training, data backup solutions, and incident response planning."
        },
        {
          question: "How do you handle security incidents?",
          answer: "We follow a comprehensive incident response plan that includes containment, investigation, remediation, and prevention of future incidents."
        }
      ],
      bestPractices2025: [
        "Implementation of Zero Trust Architecture",
        "AI-powered threat detection and response",
        "Regular security awareness training",
        "Automated security testing and validation",
        "Compliance with latest security standards",
        "Cloud-native security solutions"
      ]
    }
  },
  commonResponses: {
    greeting: "Hello! I'm the KVS Techflow virtual assistant. How can I help you today?",
    serviceInquiry: "We offer a range of technology services including web development, mobile apps, cloud solutions, IT consulting, and cybersecurity. Which area would you like to know more about?",
    pricing: "Our pricing varies based on project requirements. I'd be happy to connect you with our team for a detailed quote based on your specific needs.",
    contact: "You can reach our team by email at contact@kvstechflow.com or by phone at (555) 123-4567. Would you like me to have someone contact you?",
    unavailable: "I apologize, but I'm not able to provide that specific information. Would you like me to connect you with a team member who can help?",
    goodbye: "Thank you for your interest in KVS Techflow. If you have any more questions, feel free to ask. Have a great day!"
  },
  successStories: {
    cases: [
      {
        client: "Global Tech Solutions",
        industry: "Technology",
        challenge: "Needed to improve operational efficiency and security",
        solution: "Implemented comprehensive IT solutions with advanced security measures",
        results: "30% improvement in efficiency and significant reduction in security incidents",
        testimonial: "KVS Techflow's comprehensive IT solutions significantly improved our operations. Their implementation of advanced security measures and analytics tools has strengthened our competitive position."
      },
      {
        client: "E-Commerce Ventures",
        industry: "Retail",
        challenge: "Scaling e-commerce platform while improving customer experience",
        solution: "Implemented cloud-based infrastructure and optimized web platform",
        results: "Successful platform scaling with improved customer experiences",
        testimonial: "Working with KVS Techflow has been a game-changer for our e-commerce platform. Their expertise in web development and cloud solutions helped us scale our business and improve customer experiences."
      },
      {
        client: "Financial Services Inc.",
        industry: "Finance",
        challenge: "Enhancing data security and system performance",
        solution: "Implemented comprehensive cybersecurity solutions",
        results: "Enhanced data protection and improved system performance",
        testimonial: "Security was our main concern, and KVS Techflow delivered a comprehensive solution that protected our sensitive data while improving system performance."
      }
    ]
  },
  companyInfo: {
    about: {
      description: "KVS Techflow IT Solution is a forward-thinking technology company that delivers innovative IT solutions to businesses of all sizes. With years of industry experience and a team of highly skilled professionals, we empower organizations to leverage technology for growth and competitive advantage.",
      founded: "2015",
      expertise: [
        "Web Development",
        "Mobile Applications",
        "Cloud Solutions",
        "IT Consulting",
        "Cybersecurity"
      ]
    },
    mission: "To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage. We are committed to delivering exceptional value through our expertise, reliability, and customer-centric approach.",
    vision: "To be the trusted technology partner for businesses worldwide, known for our innovative solutions, technical excellence, and unwavering commitment to client success.",
    values: [
      {
        name: "Excellence",
        description: "We strive for excellence in every aspect of our work"
      },
      {
        name: "Innovation",
        description: "We embrace innovation and creative problem-solving"
      },
      {
        name: "Integrity",
        description: "We operate with honesty, transparency, and ethical standards"
      },
      {
        name: "Client-Centric",
        description: "We prioritize our clients' needs and success"
      }
    ]
  },
  industryInsights: {
    aiTrends: {
      title: "AI in Business",
      lastUpdated: "2025-05-01",
      keyTrends: [
        "Workflow automation for routine tasks",
        "Predictive maintenance in manufacturing",
        "AI-assisted customer service",
        "Accessible data analysis tools",
        "Small-scale focused AI solutions",
        "Mature AI governance frameworks"
      ],
      practicalApplications: [
        {
          area: "Process Automation",
          description: "Automating repetitive tasks in accounting, document processing, and customer service"
        },
        {
          area: "Predictive Analytics",
          description: "Machine maintenance prediction and business forecasting"
        },
        {
          area: "Customer Service",
          description: "AI-assisted human agents with relevant information and suggestions"
        }
      ]
    },
    mobileDevelopment: {
      title: "Mobile Development Trends",
      lastUpdated: "2025-04-12",
      keyTrends: [
        "Cross-platform development efficiency",
        "Performance optimization focus",
        "Security by design approach",
        "Robust offline functionality",
        "Enhanced accessibility features",
        "Cloud integration requirements"
      ],
      bestPractices: [
        "Using React Native and Flutter for cross-platform development",
        "Implementing comprehensive security measures",
        "Ensuring WCAG compliance and accessibility",
        "Building robust offline capabilities",
        "Automated testing and continuous integration"
      ]
    },
    digitalTransformation: {
      title: "Digital Transformation Strategy",
      lastUpdated: "2025-04-29",
      keyComponents: [
        "Clear vision and leadership commitment",
        "Customer-centric approach",
        "Agile implementation methodology",
        "Cultural change management",
        "Data-driven decision making"
      ],
      implementationGuide: [
        {
          phase: "Planning",
          description: "Define clear business objectives and get leadership buy-in"
        },
        {
          phase: "Assessment",
          description: "Evaluate current technology and identify gaps"
        },
        {
          phase: "Implementation",
          description: "Execute changes incrementally with regular feedback"
        },
        {
          phase: "Optimization",
          description: "Monitor results and adjust based on metrics"
        }
      ]
    }
  },
  serviceUpdates: {
    webDevelopment: {
      latestPractices: [
        "Performance optimization with code splitting and lazy loading",
        "Accessibility compliance with WCAG 2.1 Level AA",
        "Advanced responsive design with container queries",
        "Enhanced security with CSP implementation",
        "Jamstack architecture adoption"
      ]
    },
    cloudSolutions: {
      emergingTrends: [
        "Multi-cloud strategy optimization",
        "Serverless computing adoption",
        "Edge computing implementation",
        "AI/ML service integration",
        "Advanced security measures"
      ]
    },
    cybersecurity: {
      essentialMeasures: [
        {
          measure: "Access Control",
          description: "Strong password policies and multi-factor authentication"
        },
        {
          measure: "Software Updates",
          description: "Regular patching and automatic updates"
        },
        {
          measure: "Employee Training",
          description: "Security awareness and phishing prevention"
        },
        {
          measure: "Data Protection",
          description: "Backup solutions and encryption"
        },
        {
          measure: "Incident Response",
          description: "Documented procedures for security incidents"
        }
      ]
    }
  },
  interactionPatterns: {
    serviceDiscovery: {
      initialQuestions: [
        "What specific challenges is your business facing?",
        "What industry are you in?",
        "What's your timeline for implementation?",
        "Have you worked with similar solutions before?"
      ],
      followUpQuestions: {
        webDevelopment: [
          "Do you have an existing website that needs improvement?",
          "What are your main goals for the website?",
          "What features are most important to you?",
          "Who is your target audience?"
        ],
        mobileApps: [
          "Which platforms do you want to target (iOS/Android)?",
          "What are the core features you need?",
          "Do you have existing brand guidelines?",
          "What's your monetization strategy?"
        ],
        cloudServices: [
          "What's your current infrastructure setup?",
          "What are your scalability requirements?",
          "Do you have compliance requirements?",
          "What's your disaster recovery strategy?"
        ]
      }
    },
    problemSolving: {
      diagnosticQuestions: {
        performance: [
          "When did you first notice the performance issues?",
          "Which specific operations are slow?",
          "Have you made recent changes to your system?",
          "What's your current traffic volume?"
        ],
        security: [
          "Have you experienced any security incidents?",
          "What security measures do you currently have?",
          "Do you handle sensitive data?",
          "What compliance requirements do you have?"
        ],
        scaling: [
          "What growth are you expecting?",
          "Where are your users located?",
          "What's your current architecture?",
          "What are your peak usage patterns?"
        ]
      }
    }
  },

  industrySpecificKnowledge: {
    healthcare: {
      compliance: ["HIPAA", "HITECH", "FDA regulations"],
      commonChallenges: [
        "Patient data security",
        "System interoperability",
        "Electronic health records",
        "Telehealth implementation"
      ],
      solutions: [
        {
          challenge: "Patient data security",
          approach: "Zero-trust architecture with end-to-end encryption",
          benefits: ["HIPAA compliance", "Secure data access", "Audit trails"]
        }
      ]
    },
    finance: {
      compliance: ["PCI DSS", "SOX", "GDPR", "KYC"],
      commonChallenges: [
        "Real-time transaction processing",
        "Fraud detection",
        "Regulatory compliance",
        "Data security"
      ],
      solutions: [
        {
          challenge: "Real-time processing",
          approach: "Microservices with event-driven architecture",
          benefits: ["Scalability", "Low latency", "High availability"]
        }
      ]
    }
  },

  contextualResponses: {
    timeBasedGreetings: {
      morning: "Good morning! I'm here to help you start your day with the right technology solutions.",
      afternoon: "Good afternoon! How can I assist you with your technology needs today?",
      evening: "Good evening! I'm here to help you with any technology questions you have."
    },
    urgencyLevels: {
      high: {
        response: "I understand this is urgent. Let me help you get immediate assistance.",
        actions: ["Priority support connection", "Emergency consultation"]
      },
      medium: {
        response: "I'll help you address this promptly. Let's discuss your needs.",
        actions: ["Schedule consultation", "Documentation resources"]
      }
    },
    contextTracking: {
      previousInteractions: true,
      userPreferences: true,
      sessionContext: true,
      urgencyLevels: {
        high: {
          keywords: ["urgent", "emergency", "critical", "asap", "immediately"],
          response: "I understand this is urgent. Let me prioritize your request and connect you with our support team right away."
        },
        medium: {
          keywords: ["soon", "important", "needed", "priority"],
          response: "I'll make sure to handle your request promptly."
        },
        low: {
          keywords: ["when possible", "sometime", "later", "eventually"],
          response: "I'll help you with that at your convenience."
        }
      }
    },
    problemSolving: {
      diagnosisPatterns: [
        {
          category: "Technical Issues",
          questions: [
            "Could you describe what specific error you're encountering?",
            "When did you first notice this issue?",
            "Have you made any recent changes to your system?"
          ]
        },
        {
          category: "Service Inquiries",
          questions: [
            "What specific goals do you have for your project?",
            "What is your timeline for implementation?",
            "Do you have any specific technical requirements?"
          ]
        }
      ],
      solutionFramework: {
        assessment: ["Identify core issue", "Gather context", "Determine urgency"],
        resolution: ["Provide immediate solution if available", "Escalate to appropriate team", "Follow up"],
        prevention: ["Document solution", "Suggest preventive measures", "Schedule check-ins"]
      }
    },
    enhancedResponses: {
      technicalGuidance: [
        "Let me walk you through the technical aspects step by step.",
        "I'll explain this in a way that's easy to understand.",
        "Here's a detailed breakdown of how this works."
      ],
      empathyPhrases: [
        "I understand how challenging this situation can be.",
        "Your concern about {issue} is completely valid.",
        "I'm here to help you find the best solution."
      ],
      confidenceBuilding: [
        "We have extensive experience handling similar situations.",
        "Our team has successfully implemented this solution for many clients.",
        "Let me share a relevant success story with you."
      ]
    }
  }
};
