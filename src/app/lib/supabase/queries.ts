import { supabase } from './client'
import type { Product, UserActivity, Review, User } from '@/app/types'

// Product queries
export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('name')

  if (error) {
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
    console.error('Error fetching reviews:', error)
    return []
  }

  return data || []
}
