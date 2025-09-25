import { NextResponse } from 'next/server'
import { generateChatResponse } from '@/app/lib/llm/gpt'
import { ChatContext, ChatMessage, Product } from '@/app/types'
import { getProducts, getProductReviews, getProductSales, getAllProductSales, getAllReviews } from '@/app/lib/supabase/queries'

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

    // Check for sales questions
    const salesResponse = await checkForSalesQuestion(message, products)
    if (salesResponse) {
      return NextResponse.json({ message: salesResponse })
    }

    // Check for review questions
    const reviewResponse = await checkForReviewQuestion(message, products)
    if (reviewResponse) {
      return NextResponse.json({ message: reviewResponse })
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

async function checkForSalesQuestion(message: string, products: Product[]): Promise<string | null> {
  const lowerMessage = message.toLowerCase()
  
  // Check for sales-related keywords
  const isSalesQuestion = 
    lowerMessage.includes('sold') || 
    lowerMessage.includes('copies') || 
    lowerMessage.includes('sales') ||
    lowerMessage.includes('how many') ||
    lowerMessage.includes('quantity')

  if (!isSalesQuestion) {
    return null
  }

  // Check if asking about a specific book
  for (const product of products) {
    const productNameLower = product.name.toLowerCase()
    if (lowerMessage.includes(productNameLower)) {
      const sales = await getProductSales(product.id)
      return `We've sold ${sales} copies of "${product.name}" so far!`
    }
  }

  // Check if asking about total sales
  if (lowerMessage.includes('total') || lowerMessage.includes('all books')) {
    const allSales = await getAllProductSales()
    const totalSales = allSales.reduce((sum, sale) => sum + sale.quantity_sold, 0)
    return `We've sold a total of ${totalSales} books across all titles!`
  }

  // Check if asking about bestseller
  if (lowerMessage.includes('bestseller') || lowerMessage.includes('most popular') || lowerMessage.includes('top selling')) {
    const allSales = await getAllProductSales()
    let bestSeller = { name: '', sales: 0 }
    
    for (const sale of allSales) {
      const product = products.find(p => p.id === sale.product_id)
      if (product && sale.quantity_sold > bestSeller.sales) {
        bestSeller = { name: product.name, sales: sale.quantity_sold }
      }
    }
    
    if (bestSeller.name) {
      return `"${bestSeller.name}" is our bestseller with ${bestSeller.sales} copies sold!`
    }
  }

  return null
}

async function checkForReviewQuestion(message: string, products: Product[]): Promise<string | null> {
  const lowerMessage = message.toLowerCase()
  
  // Check for review-related keywords
  const isReviewQuestion = 
    lowerMessage.includes('review') || 
    lowerMessage.includes('rating') || 
    lowerMessage.includes('opinion') ||
    lowerMessage.includes('what do people think') ||
    lowerMessage.includes('customer feedback') ||
    lowerMessage.includes('thoughts on') ||
    lowerMessage.includes('feedback')

  if (!isReviewQuestion) {
    return null
  }

  // Check if asking about a specific book's reviews
  for (const product of products) {
    const productNameLower = product.name.toLowerCase()
    if (lowerMessage.includes(productNameLower)) {
      const reviews = await getProductReviews(product.id)
      
      if (reviews.length === 0) {
        return `"${product.name}" doesn't have any reviews yet. Be the first to share your thoughts!`
      }

      // Calculate average rating
      const ratings = reviews.filter(r => r.rating).map(r => r.rating!)
      const avgRating = ratings.length > 0 ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1) : 'No ratings'
      
      // Get a few sample reviews
      const sampleReviews = reviews.slice(0, 3)
      let response = `"${product.name}" has ${reviews.length} reviews with an average rating of ${avgRating}/5 stars.\n\nHere are some recent reviews:\n\n`
      
      sampleReviews.forEach((review, index) => {
        const alias = review.customer_alias || 'Anonymous'
        const rating = review.rating ? `${review.rating}/5 stars` : 'No rating'
        response += `${index + 1}. **${alias}** (${rating}): "${review.review_text}"\n\n`
      })
      
      return response.trim()
    }
  }

  // Check if asking about all reviews or general review questions
  if (lowerMessage.includes('all reviews') || lowerMessage.includes('everyone') || lowerMessage.includes('customers')) {
    const allReviews = await getAllReviews()
    
    if (allReviews.length === 0) {
      return "We don't have any reviews yet. Be the first to share your thoughts on our books!"
    }

    // Get average rating across all books
    const ratings = allReviews.filter(r => r.rating).map(r => r.rating!)
    const avgRating = ratings.length > 0 ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1) : 'No ratings'
    
    // Get some recent reviews from different books
    const recentReviews = allReviews.slice(0, 5)
    let response = `We have ${allReviews.length} total reviews across all books with an average rating of ${avgRating}/5 stars.\n\nHere are some recent customer reviews:\n\n`
    
    recentReviews.forEach((review, index) => {
      const product = products.find(p => p.id === review.product_id)
      const productName = product ? product.name : 'Unknown Book'
      const alias = review.customer_alias || 'Anonymous'
      const rating = review.rating ? `${review.rating}/5 stars` : 'No rating'
      response += `${index + 1}. **${alias}** on "${productName}" (${rating}): "${review.review_text}"\n\n`
    })
    
    return response.trim()
  }

  return null
}
