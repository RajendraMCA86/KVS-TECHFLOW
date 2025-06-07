import { IntelligentChatbot } from './intelligent-chatbot';
import { ChatbotResponse } from './types';

export class Aura extends IntelligentChatbot {
  constructor() {
    super();
  }

  public async getResponse(message: string): Promise<ChatbotResponse> {
    const lowerCaseMessage = message.toLowerCase();

    if (this.isFirstMessage()) {
      return {
        output: "Hello! 👋 I'm Aura, your digital strategy assistant. We help businesses grow with outstanding apps, websites, and marketing. How can I help you map out your project today?",
        quickReplies: ['Explore Our Services', 'Get a Quote', 'Book a Consultation', 'Ask a Question']
      };
    }

    switch (lowerCaseMessage) {
      case 'explore our services':
        return {
          output: "Excellent! We build high-performance native (iOS/Android), cross-platform (Flutter/React Native), and web applications. To give you the best advice, could you tell me a bit about your vision?",
        };
      case 'get a quote':
        return {
          output: "Of course. We create beautiful, fast, and SEO-ready websites that convert visitors into customers. Are you looking to build a brand new site or redesign an existing one?",
        };
      case 'book a consultation':
        return {
          output: "Let's get you scheduled for a free 15-minute strategy session with an expert. We can connect our calendars to find a time that works instantly.",
        };
      case 'ask a question':
        return {
          output: "I'm happy to answer any questions you have. What's on your mind?",
        };
      default:
        return this.processMessage(message);
    }
  }

  private isFirstMessage(): boolean {
    // This is a simplified check. A more robust implementation would check the conversation context.
    return this.context.previousMessages.length === 0;
  }
}