import { NextResponse } from 'next/server'
import { generateChatResponse } from '@/app/lib/llm/gpt'
import { ChatContext, ChatMessage, Product } from '@/app/types'
import { getProducts, getProductReviews } from '@/app/lib/supabase/queries'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, context } = body

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      )
    }

    // Fetch products from database
    const products = await getProducts()
    
    // Build context for the LLM with database products
    const chatContext: ChatContext = {
      currentProduct: context?.currentProduct,
      userActivity: context?.userActivity || [],
      conversationHistory: context?.conversationHistory || [],
      allProducts: products // Add all products to context
    }

    // Check for personalization opportunities
    const personalizationResponse = checkForPersonalization(
      message, 
      chatContext, 
      products
    )

    if (personalizationResponse) {
      return NextResponse.json({ message: personalizationResponse })
    }

    // Generate response using LLM
    const response = await generateChatResponse(
      message,
      chatContext,
      context?.conversationHistory || []
    )

    return NextResponse.json({ message: response })

  } catch (error) {
    console.error('Chatbot API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}
function checkForPersonalization(
  message: string, 
  context: ChatContext, 
  products: Product[]
): string | null {
  const lowerMessage = message.toLowerCase()
  
  // Check for recommendation requests
  const isRequestingRecommendation = 
    lowerMessage.includes('recommend') || 
    lowerMessage.includes('suggest') || 
    lowerMessage.includes('what should i read') ||
    lowerMessage.includes('next book')

  if (!isRequestingRecommendation) {
    return null
  }

  // Check if user has viewed a first book in a trilogy
  if (context.userActivity && context.userActivity.length > 0) {
    for (const activityProductId of context.userActivity) {
      const product = products.find(p => p.id === activityProductId)
      
      if (product && product.trilogy_id && product.trilogy_order === 1) {
        // Find the next book in the trilogy
        const nextBook = products.find(
          p => p.trilogy_id === product.trilogy_id && p.trilogy_order === 2
        )
        
        if (nextBook) {
          return `Based on your interest in "${product.name}", I'd recommend "${nextBook.name}"! It's the second book in the same series and continues the story perfectly. It costs ${nextBook.price} and has ${nextBook.pages} pages. Would you like to know more about it?`
        }
      }
    }
  }

  // Check if they're currently viewing a product
  if (context.currentProduct) {
    const current = context.currentProduct
    if (current.trilogy_id && current.trilogy_order && current.trilogy_order < 3) {
      const nextBook = products.find(
        p => p.trilogy_id === current.trilogy_id && p.trilogy_order === (current.trilogy_order! + 1)
      )
      
      if (nextBook) {
        return `Since you're looking at "${current.name}", you might enjoy "${nextBook.name}" - it's the next book in the series! It's ${nextBook.price} and ${nextBook.pages} pages.`
      }
    }
  }

  return null
}
