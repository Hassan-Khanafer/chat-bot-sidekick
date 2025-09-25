export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ChatContextProduct {
  id: string;
  name: string;
  price: number;
  pages: number;
  cover_type: string;
  description?: string;
  trilogy_id?: string;
  trilogy_order?: number;
  shipment_days?: number;
  age_recommendation?: string;
  genre?: string;
}

export interface ChatContext {
  currentProduct?: ChatContextProduct;
  userActivity?: UserActivity[];
  conversationHistory?: ChatMessage[];
  allProducts?: ChatContextProduct[];
}

export interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export interface ChatbotState {
  isOpen: boolean;
  messages: ChatMessage[];
  isLoading: boolean;
  currentContext?: ChatContext;
}

export interface PersonalizationContext {
  viewedProducts: string[];
  clickedProducts: string[];
  lastTrilogyViewed?: {
    trilogyId: string;
    bookOrder: number;
  };
}
