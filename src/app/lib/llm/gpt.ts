import OpenAI from 'openai'
import { ChatMessage, ChatContext, Product, Review } from '@/app/types'

// Provider configuration
const PROVIDER = process.env.LLM_PROVIDER || 'groq'

// OpenAI configuration (lazy init only when provider is OpenAI)
let openai: OpenAI | null = null
const MODEL = process.env.OPENAI_MODEL || 'gpt-4o-mini'

// Groq configuration (free, fast hosted LLM)
const GROQ_API_KEY = process.env.GROQ_API_KEY
const GROQ_MODEL = process.env.GROQ_MODEL || 'llama-3.1-8b-instant'

// Ollama configuration (for local, free LLMs)
const OLLAMA_BASE_URL = process.env.OLLAMA_BASE_URL || 'http://localhost:11434'
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3.1:8b'
// No request timeout; rely on provider responsiveness

export async function generateChatResponse(
  message: string,
  context: ChatContext,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  try {
    const systemPrompt = buildSystemPrompt(context)
    const messages = buildMessageHistory(systemPrompt, conversationHistory, message)

    if (PROVIDER === 'groq') {
      const content = await callGroqChat(messages)
      return content || "I apologize, but I couldn't generate a response. Please try again."
    } else if (PROVIDER === 'ollama') {
      const content = await callOllamaChat(messages)
      return content || "I apologize, but I couldn't generate a response. Please try again."
    } else {
      if (!openai) {
        openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      }
      const completionAny = await openai.chat.completions.create({
        model: MODEL,
        messages,
        max_tokens: 180,
        temperature: 0.6,
      }) as any

      return completionAny?.choices?.[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again."
    }
  } catch (error: any) {
    console.error('Error generating chat response:', error)
    const code = error?.code || error?.error?.code
    if (PROVIDER === 'ollama') {
      if (code === 'ECONNREFUSED' || /fetch failed|ECONNREFUSED/i.test(String(error?.message))) {
        return "Local LLM is not reachable. Start Ollama (ollama serve) and pull the model." 
      }
    }
    if (code === 'insufficient_quota' || error?.status === 429) {
      return "I'm temporarily at capacity due to quota limits. Please try again shortly."
    }
    throw new Error('Failed to generate response')
  }
}

function buildSystemPrompt(context: ChatContext): string {
  let prompt = `You are an AI Sidekick for an e-commerce bookstore. You are friendly, helpful, and knowledgeable about books. 

Your main functions are:
1. Answer questions about specific book details (price, pages, cover type)
2. Provide book reviews and opinions when asked
3. Make personalized book recommendations based on user activity
4. Help users find books by name, genre, or characteristics

Guidelines:
- Be concise but helpful (max 2-3 sentences typically)
- Use a friendly, conversational tone
- Focus on the books in our catalog
- When providing reviews, create realistic, helpful summaries
- For recommendations, consider the user's viewing history
- Always reference specific book names, prices, and details when relevant

Available books catalog:`

  // Add all products to the prompt
  if (context.allProducts && context.allProducts.length > 0) {
    context.allProducts.forEach((product, index) => {
      prompt += `\n${index + 1}. "${product.name}"
   - Price: $${product.price}
   - Pages: ${product.pages}
   - Cover: ${product.cover_type}
   - Description: ${product.description || 'No description available'}
   - Trilogy: ${product.trilogy_id || 'Standalone'} (Book ${product.trilogy_order || 'N/A'})`
    })
  }

  if (context.currentProduct) {
    prompt += `\n\nCurrently viewing: "${context.currentProduct.name}"
- Price: $${context.currentProduct.price}
- Pages: ${context.currentProduct.pages}
- Cover: ${context.currentProduct.cover_type}
- Description: ${context.currentProduct.description || 'No description available'}`
  }

  if (context.userActivity && context.userActivity.length > 0) {
    prompt += `\n\nUser's recent activity: The user has shown interest in products with IDs: ${context.userActivity.map(a => a.product_id).join(', ')}`
  }

  return prompt
}
function buildMessageHistory(
  systemPrompt: string,
  conversationHistory: ChatMessage[],
  currentMessage: string
): Array<{ role: 'system' | 'user' | 'assistant'; content: string }> {
  const messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }> = [
    { role: 'system', content: systemPrompt }
  ]

  // Add recent conversation history (last 10 messages to stay within token limits)
  const recentHistory = conversationHistory.slice(-10)
  recentHistory.forEach(msg => {
    messages.push({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.content
    })
  })

  // Add current message
  messages.push({ role: 'user', content: currentMessage })

  return messages
}

export async function generateProductReview(product: Product): Promise<string> {
  try {
    const prompt = `Generate a brief, realistic review summary for this book:
Title: ${product.name}
Price: $${product.price}
Pages: ${product.pages}
Cover Type: ${product.cover_type}

Create a 2-3 sentence review summary that sounds like it came from real readers. Include both positive aspects and any minor critiques if appropriate.`

    if (PROVIDER === 'groq') {
      const content = await callGroqChat([{ role: 'user', content: prompt }])
      return content || "Reviews are currently unavailable for this book."
    } else if (PROVIDER === 'ollama') {
      const content = await callOllamaChat([{ role: 'user', content: prompt }])
      return content || "Reviews are currently unavailable for this book."
    } else {
      if (!openai) {
        openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
      }
      const completionAny = await openai.chat.completions.create({
        model: MODEL,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 120,
        temperature: 0.7,
      }) as any

      return completionAny?.choices?.[0]?.message?.content || "Reviews are currently unavailable for this book."
    }
  } catch (error: any) {
    console.error('Error generating product review:', error)
    const code = error?.code || error?.error?.code
    if (PROVIDER === 'ollama') {
      if (code === 'ECONNREFUSED' || /fetch failed|ECONNREFUSED/i.test(String(error?.message))) {
        return "Local LLM is not reachable. Please start Ollama (ollama serve)."
      }
    }
    if (code === 'insufficient_quota' || error?.status === 429) {
      return "Reviews are temporarily unavailable due to quota limits. Please try again soon."
    }
    return "I'm having trouble accessing reviews right now. Please try again later."
  }
}

// Local Ollama chat helper
async function callOllamaChat(
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
): Promise<string> {
  // Ollama native chat API: POST /api/chat
  // https://github.com/ollama/ollama/blob/main/docs/api.md#chat
  const response = await fetch(`${OLLAMA_BASE_URL}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Non-streaming to keep implementation simple
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages,
        stream: false,
        options: {
          temperature: 0.6,
        },
      }),
    })

  if (!response.ok) {
    // Graceful fallback on local errors
    return ''
  }

  const data = await response.json().catch(() => null)
  // data.message?.content for non-streaming chat
  const content: string | undefined = data?.message?.content
  if (content) return content

  // Some versions may return an array of messages
  if (Array.isArray(data?.messages) && data.messages.length > 0) {
    const last = data.messages[data.messages.length - 1]
    if (last?.content) return last.content
  }

  return ''
}

// Groq chat helper (free, fast hosted LLM)
async function callGroqChat(
  messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>
): Promise<string> {
  if (!GROQ_API_KEY) {
    console.error('GROQ_API_KEY not provided')
    return ''
  }

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages,
      temperature: 0.6,
      max_tokens: 180,
    }),
  })

  if (!response.ok) {
    console.error('Groq API error:', response.status, response.statusText)
    return ''
  }

  const data = await response.json().catch(() => null)
  return data?.choices?.[0]?.message?.content || ''
}
