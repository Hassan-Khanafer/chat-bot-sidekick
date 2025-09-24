import { useState } from 'react'
import { Product } from '@/app/types'

interface UseProductModalReturn {
  selectedProduct: Product | null
  isOpen: boolean
  openModal: (product: Product) => void
  closeModal: () => void
}

export function useProductModal(): UseProductModalReturn {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const openModal = (product: Product) => {
    setSelectedProduct(product)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    // Small delay to allow animation before clearing product
    setTimeout(() => setSelectedProduct(null), 200)
  }

  return {
    selectedProduct,
    isOpen,
    openModal,
    closeModal
  }
}
