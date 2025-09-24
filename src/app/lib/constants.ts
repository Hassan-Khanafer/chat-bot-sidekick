// Application constants
export const APP_CONFIG = {
  name: 'Chat Bot Sidekick',
  description: 'A proof-of-concept e-commerce website featuring an AI-powered chatbot assistant',
  maxChatHistory: 20,
  chatbotName: 'AI Sidekick',
} as const

// Product categories and metadata
export const COVER_TYPES = {
  PAPERBACK: 'Paperback',
  HARDCOVER: 'Hard Cover'
} as const

// Chatbot prompts and responses
export const CHATBOT_PROMPTS = {
  welcome: "Hi! I'm your AI Sidekick. I can help you with information about our books, reviews, and recommendations. What would you like to know?",
  error: "I apologize, but I'm having trouble processing your request right now. Please try again.",
  noProduct: "I don't have information about that specific book. You can click on any book to learn more about it!",
  reviewsGeneral: "I'd be happy to share some reviews! Which book would you like to hear about?"
} as const

// API endpoints
export const API_ROUTES = {
  chatbot: '/api/chatbot',
  products: '/api/products'
} as const

// Activity types for user tracking
export const ACTIVITY_TYPES = {
  CLICK: 'click',
  VIEW: 'view'
} as const
