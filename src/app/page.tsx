'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/app/components/layout/Header'
import { ProductList } from '@/app/components/product/ProductList'
import { ProductModal } from '@/app/components/product/ProductModal'
import { ChatbotUI } from '@/app/components/chatbot/ChatbotUI'
import { useProductModal } from '@/app/hooks/useProductModal'
import { Product } from '@/app/types'
import { generateId } from '@/app/lib/utils'

export default function HomePage() {
  const { selectedProduct, isOpen, openModal, closeModal } = useProductModal()
  const [userActivity, setUserActivity] = useState<string[]>([])
  const [userId] = useState(() => generateId()) // Simple session ID for demo

  const handleProductClick = (product: Product) => {
    // Track user activity
    setUserActivity(prev => [...prev, product.id])
    
    // In a real app, you would also log this to the database
    // logUserActivity(userId, product.id, 'click')
    
    openModal(product)
  }

  return (
    <main className="min-h-screen bg-off-white">
      <Header />
      
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-dark-gray text-center mb-8">
            Our Book Collection
          </h2>
          <ProductList onProductClick={handleProductClick} />
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={isOpen}
        onClose={closeModal}
      />

      <ChatbotUI 
        currentProduct={selectedProduct}
        userActivity={userActivity}
      />
    </main>
  )
}
