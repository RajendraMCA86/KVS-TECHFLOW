interface IntentData {
  patterns: string[];
  responses: Array<{
    type: string;
    content: string;
    followUp?: string[];
  }>;
}

interface EntityData {
  name: string;
  aliases: string[];
}

interface TrainingData {
  intents: Record<string, IntentData>;
  entities: Record<string, EntityData[]>;
  sentiments: {
    positive: string[];
    negative: string[];
    neutral: string[];
  };
}

export const trainingData: TrainingData = {
  intents: {
    greeting: {
      patterns: [
        "hello",
        "hi",
        "hey",
        "good morning",
        "good afternoon",
        "good evening",
        "hi there",
        "greetings"
      ],
      responses: [
        {
          type: "text",
          content: "Hello! How can I help you today?",
          followUp: ["Would you like to learn about our services?", "Are you looking for specific information?"]
        }
      ]
    },
    service_inquiry: {
      patterns: [
        "what services do you offer",
        "tell me about your services",
        "what can you do",
        "what do you specialize in",
        "services available",
        "what kind of services",
        "show me your services"
      ],
      responses: [
        {
          type: "service",
          content: "We offer a wide range of services including:",
          followUp: [
            "Would you like to know more about any specific service?",
            "Which service interests you the most?"
          ]
        }
      ]
    },
    pricing_inquiry: {
      patterns: [
        "how much does it cost",
        "what are your rates",
        "pricing information",
        "cost of services",
        "service prices",
        "price list",
        "pricing packages"
      ],
      responses: [
        {
          type: "text",
          content: "Our pricing varies based on project requirements. Would you like a custom quote?",
          followUp: ["What type of service are you interested in?", "What's your project budget range?"]
        }
      ]
    },
    contact_request: {
      patterns: [
        "talk to someone",
        "speak with a representative",
        "contact information",
        "how can I reach you",
        "contact details",
        "get in touch",
        "schedule a call"
      ],
      responses: [
        {
          type: "text",
          content: "I'll be happy to connect you with our team.",
          followUp: ["Would you like me to arrange a call back?", "What's the best time to contact you?"]
        }
      ]
    },
    technical_support: {
      patterns: [
        "need help with",
        "having issues",
        "technical problem",
        "not working",
        "support needed",
        "fix issue",
        "troubleshoot"
      ],
      responses: [
        {
          type: "text",
          content: "I understand you need technical support. Could you please describe the issue?",
          followUp: ["What specific problem are you experiencing?", "When did this issue start?"]
        }
      ]
    },
    fetch_website_data: {
        patterns: [
          "fetch data from",
          "get content from",
          "scrape website",
          "what does this site say"
        ],
        responses: [
          {
            type: "text",
            content: "Sure, I can fetch data from a website. Please provide the URL."
          }
        ]
      }
  },
  entities: {
    service_type: [
      {
        name: "Web Development",
        aliases: ["website", "web app", "web application", "web development", "website development"]
      },
      {
        name: "Mobile Development",
        aliases: ["mobile app", "ios app", "android app", "mobile application", "phone app"]
      },
      {
        name: "Cloud Solutions",
        aliases: ["cloud services", "cloud computing", "aws", "azure", "cloud infrastructure"]
      },
      {
        name: "IT Consulting",
        aliases: ["consulting", "technical consulting", "IT consulting", "technology consulting"]
      }
    ],
    technology: [
      {
        name: "React",
        aliases: ["reactjs", "react.js", "react framework", "react development"]
      },
      {
        name: "Node.js",
        aliases: ["nodejs", "node", "express", "node.js development"]
      },
      {
        name: "Python",
        aliases: ["python development", "django", "flask", "python programming"]
      },
      {
        name: "Cloud",
        aliases: ["aws", "azure", "cloud computing", "cloud services", "cloud platform"]
      }
    ],
    url: [
        {
          name: "url",
          aliases: ["http://", "https://", "www."]
        }
      ]
  },
  sentiments: {
    positive: [
      "great", "excellent", "amazing", "good", "wonderful", "fantastic",
      "helpful", "perfect", "awesome", "thank", "thanks", "appreciate",
      "love", "best", "superb", "outstanding", "brilliant"
    ],
    negative: [
      "bad", "poor", "terrible", "awful", "unhelpful", "disappointed",
      "horrible", "worst", "waste", "useless", "frustrating", "annoying",
      "hate", "dislike", "wrong"
    ],
    neutral: [
      "okay", "fine", "alright", "neutral", "average", "moderate",
      "fair", "normal", "standard", "typical", "regular"
    ]
  }
};
