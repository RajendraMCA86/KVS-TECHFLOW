export enum MarketingService {
  SEO = 'SEO',
  PPC = 'Paid Ads (PPC)',
  SocialMedia = 'Social Media Mgmt',
  FullStrategy = 'A full strategy',
}

export enum HasExistingMarketing {
  Yes = 'Yes',
  No = 'No',
}

export enum MarketingBudget {
  LessThan1k = '< $1,000',
  Between1kAnd5k = '$1,000 - $5,000',
  MoreThan5k = '$5,000+',
  Recommendation = 'Need a recommendation',
}
export type Role = 'user' | 'assistant' | 'system';

export interface ChatMessage {
  role: Role;
  content: string;
  timestamp: Date;
  quickReplies?: QuickReply[];
  form?: Form;
}

export interface Lead {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectDetails?: string;
  currentWebsite?: string;
  preferredCallbackTime?: string;
  gdprConsent: boolean;
  serviceInterest?: 'APP_DEV' | 'WEB_DEV' | 'MARKETING' | 'DESIGN' | 'GENERAL';
  // Mobile App Dev
  appType?: 'E-commerce' | 'Social Media' | 'Booking/Service' | 'FinTech' | 'Health & Fitness' | 'Other';
  appPlatform?: 'iOS' | 'Android' | 'Both (Cross-Platform)';
  hasBackend?: 'Yes' | 'No' | "I'm not sure";
  appBudget?: '< $10k' | '$10k - $25k' | '$25k - $50k' | '$50k+';
  // Website Dev
  websiteGoal?: 'Sell Products (E-commerce)' | 'Generate Leads' | 'Showcase a Portfolio' | 'Publish Content (Blog)' | 'Other';
  websiteType?: 'New Design' | 'Redesign';
  websiteTech?: 'WordPress' | 'Custom Build' | 'I need a recommendation';
  // Digital Marketing
  marketingService?: 'SEO' | 'Paid Ads (PPC)' | 'Social Media Managment' | 'A full strategy';
  hasExistingMarketing?: 'Yes' | 'No';
  marketingBudget?: '< $1,000' | '$1,000 - $5,000' | '$5,000+' | 'Need a recommendation';
  // UI/UX Design
  designService?: 'UI/UX for an App' | 'UI/UX for a Website' | 'Logo & Brand Kit' | 'Just need a consultation';
  hasDesignAssets?: 'Yes, I have them' | 'No, starting from scratch';
}

export interface GeneralInquiry {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  gdprConsent: boolean;
}

export interface ConversationContext {
  previousMessages: ChatMessage[];
  currentFlow: string | null;
  leadInfo: Partial<Lead>;
  sessionStartTime: Date;
  intentHistory: string[];
}

export interface NLPResponse {
  intent: string;
  confidence: number;
  entities: Array<{
    type: string;
    value: string;
    confidence: number;
  }>;
  sentiment: 'positive' | 'negative' | 'neutral';
}

export interface QuickReply {
  text: string;
  payload: string;
}

export interface FormField {
  name: keyof Lead;
  type: 'text' | 'email' | 'tel' | 'textarea';
  label: string;
  placeholder?: string;
  required: boolean;
}

export interface Form {
  fields: FormField[];
  submitButtonText: string;
}

export interface ChatbotResponse {
  output: string;
  quickReplies?: QuickReply[];
  form?: Form;
  flow?: string; // To indicate a change in conversation flow
  context?: Record<string, unknown>;
}
