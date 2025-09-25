import { NextResponse } from 'next/server'
import productsData from '@/data/products.json'
import { Product } from '@/app/types'

export async function GET() {
  try {
    // In a real application, this would fetch from Supabase
    // For now, we'll return the mock data
    const products = productsData.products as Product[]
    
    return NextResponse.json({ products })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { productId } = body

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    const products = productsData.products as Product[]
    const product = products.find(p => p.id === productId)

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ product })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
