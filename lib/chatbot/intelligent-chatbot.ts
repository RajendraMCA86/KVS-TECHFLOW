import { ChatbotIntelligence, ChatMessage, ConversationContext, NLPResponse, ChatbotResponse, ServiceCategory } from './types';
import { chatbotConfig } from '../../data/chatbot-config';
import { NLPService } from './nlp-service';
import { WebsiteDataFetcher } from './website-data-fetcher';

export class IntelligentChatbot {
  protected context: ConversationContext;
  private nlpService: NLPService;
  private dataFetcher: WebsiteDataFetcher;

  constructor() {
    this.context = this.initializeContext();
    this.nlpService = new NLPService();
    this.dataFetcher = new WebsiteDataFetcher();
  }

  private initializeContext(): ConversationContext {
    return {
      userPreferences: {},
      previousMessages: [],
      currentIndustry: null,
      urgencyLevel: 'medium',
      sessionStartTime: new Date(),
      intentHistory: [],
      relevantServices: [],
      sentimentScore: 'neutral',
      userInfo: {
        lastVisit: new Date(),
        preferences: {}
      }
    };
  }

  private getTimeBasedGreeting(): string {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning!";
    if (hour >= 12 && hour < 17) return "Good afternoon!";
    if (hour >= 17 && hour < 22) return "Good evening!";
    return "Hello!";
  }

  public async processMessage(message: string): Promise<ChatbotResponse> {
    try {
      const nlpResult = await this.nlpService.processMessage(message);
      
      if (nlpResult.intent) {
        this.context.intentHistory.push(nlpResult.intent);
      }

      // Handle different intents
      switch (nlpResult.intent) {
        case 'greeting':
          return {
            output: `${this.getTimeBasedGreeting()} How can I assist you today?`
          };

        case 'service_inquiry':
          return {
            output: this.handleServiceInquiry(nlpResult.entities)
          };

        case 'contact_request':
          return {
            output: "I'll be happy to help you get in touch with our team. You can reach us through our contact form, email at contact@kvstechflow.com, or I can have someone call you back. What would you prefer?"
          };

        case 'pricing_inquiry':
          return {
            output: "Our pricing varies based on project requirements. Would you like to discuss your specific needs with our team? They can provide you with a detailed quote."
          };

        case 'technical_support':
          return {
            output: "I understand you need technical support. Could you please describe the issue you're experiencing? Our technical team is ready to assist you."
          };
        
        case 'fetch_website_data':
            return this.handleWebsiteDataFetch(nlpResult.entities);

        default:
          if (nlpResult.confidence < 0.4) {
            return {
              output: chatbotConfig.settings.fallbackResponse
            };
          }
          return this.generateContextualResponse(message, nlpResult);
      }
    } catch (error) {
      console.error('Error processing message:', error);
      return {
        output: "I apologize, but I'm having trouble processing your request. Please try rephrasing your question or contact our support team directly."
      };
    }
  }

  private handleServiceInquiry(entities: Array<{ type: string; value: string; confidence: number }>): string {
    const serviceTypes = entities.filter(e => e.type === 'service_type');
    
    if (serviceTypes.length > 0) {
      const service = serviceTypes[0].value;
      const categories = chatbotConfig.serviceCategories as Record<string, ServiceCategory>;
      const serviceInfo = Object.values(categories)
        .find(cat => cat.title.toLowerCase() === service.toLowerCase());

      if (serviceInfo) {
        return `${serviceInfo.description}\n\nOur capabilities include:\n${serviceInfo.capabilities.join('\n• ')}\n\nWould you like to know more about any specific aspect?`;
      }
    }

    return "We offer a wide range of services including web development, mobile apps, cloud solutions, and IT consulting. Which service are you most interested in learning about?";
  }

  private async handleWebsiteDataFetch(entities: Array<{ type: string; value: string; confidence: number }>): Promise<ChatbotResponse> {
    const urlEntity = entities.find(e => e.type === 'url');
    if (!urlEntity) {
      return {
        output: "Please provide a URL to fetch data from."
      };
    }

    const data = await this.dataFetcher.fetchData(urlEntity.value);
    if (data) {
      return {
        output: `Successfully fetched data from ${urlEntity.value}. Title: ${data.title}`
      };
    }

    return {
      output: `Failed to fetch data from ${urlEntity.value}.`
    };
  }

  private generateContextualResponse(message: string, nlpResult: NLPResponse): ChatbotResponse {
    const lowercaseMessage = message.toLowerCase();
    
    // Check for common keywords and generate appropriate responses
    if (lowercaseMessage.includes('thank')) {
      return {
        output: "You're welcome! Is there anything else I can help you with?"
      };
    }
    
    if (lowercaseMessage.includes('bye') || lowercaseMessage.includes('goodbye')) {
      return {
        output: "Thank you for chatting with me! If you need anything else, don't hesitate to ask. Have a great day!"
      };
    }

    // Default response with suggestion
    return {
      output: "I'm not quite sure about that. Would you like to know about our services, discuss a project, or speak with our team?"
    };
  }
}
