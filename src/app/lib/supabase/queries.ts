import { supabase } from './client'
import type { Product, UserActivity, Review } from '@/app/types'

// Product queries
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name')

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching products:', error)
    return []
  }

  return data || []
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching product:', error)
    return null
  }

  return data
}

export async function getProductsByTrilogyId(trilogyId: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('trilogy_id', trilogyId)
    .order('trilogy_order')

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching trilogy products:', error)
    return []
  }

  return data || []
}

// User activity queries
export async function logUserActivity(userId: string, productId: string, activityType: string): Promise<void> {
  const { error } = await supabase
    .from('user_activity')
    .insert({
      user_id: userId,
      product_id: productId,
      activity_type: activityType
    })

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error logging user activity:', error)
  }
}

export async function getUserActivity(userId: string): Promise<UserActivity[]> {
  const { data, error } = await supabase
    .from('user_activity')
    .select('*')
    .eq('user_id', userId)
    .order('timestamp', { ascending: false })

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching user activity:', error)
    return []
  }

  return data || []
}

// Review queries
export async function getProductReviews(productId: string): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('product_id', productId)
    .order('created_at', { ascending: false })

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching reviews:', error)
    return []
  }

  return data || []
}

export async function getAllReviews(): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching all reviews:', error)
    return []
  }

  return data || []
}

export async function getReviewsByRating(rating: number): Promise<Review[]> {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .eq('rating', rating)
    .order('created_at', { ascending: false })

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching reviews by rating:', error)
    return []
  }

  return data || []
}

// Sales queries
export async function getProductSales(productId: string): Promise<number> {
  const { data, error } = await supabase
    .from('sales')
    .select('quantity_sold')
    .eq('product_id', productId)
    .single()

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching sales:', error)
    return 0
  }

  return data?.quantity_sold || 0
}

export async function getAllProductSales(): Promise<Array<{ product_id: string; quantity_sold: number }>> {
  const { data, error } = await supabase
    .from('sales')
    .select('product_id, quantity_sold')

  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching all sales:', error)
    return []
  }

  return data || []
}
