import OpenAI from 'openai'
import { ChatMessage, ChatContext, Product, Review } from '@/app/types'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
})

export async function generateChatResponse(
  message: string,
  context: ChatContext,
  conversationHistory: ChatMessage[] = []
): Promise<string> {
  try {
    const systemPrompt = buildSystemPrompt(context)
    const messages = buildMessageHistory(systemPrompt, conversationHistory, message)

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages,
      max_tokens: 300,
      temperature: 0.7,
    })

    return completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again."
  } catch (error) {
    console.error('Error generating chat response:', error)
    throw new Error('Failed to generate response')
  }
}

function buildSystemPrompt(context: ChatContext): string {
  let prompt = `You are an AI Sidekick for an e-commerce bookstore. You are friendly, helpful, and knowledgeable about books. 

Your main functions are:
1. Answer questions about specific book details (price, pages, cover type)
2. Provide book reviews and opinions when asked
3. Make personalized book recommendations based on user activity

Guidelines:
- Be concise but helpful (max 2-3 sentences typically)
- Use a friendly, conversational tone
- Focus on the books in our catalog
- When providing reviews, create realistic, helpful summaries
- For recommendations, consider the user's viewing history

Available books catalog:`

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

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 150,
      temperature: 0.8,
    })

    return completion.choices[0]?.message?.content || "Reviews are currently unavailable for this book."
  } catch (error) {
    console.error('Error generating product review:', error)
    return "I'm having trouble accessing reviews right now. Please try again later."
  }
}
