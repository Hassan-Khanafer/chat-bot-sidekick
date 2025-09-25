import { ShippingOption } from '@/app/types'

export function getShippingOptions(): ShippingOption[] {
  return [
    {
      type: 'standard',
      days: 3,
      price: 0,
      description: 'Standard shipping (3-5 business days)'
    },
    {
      type: 'priority',
      days: 1,
      price: 5.99,
      description: 'Priority shipping (1-2 business days)'
    }
  ]
}

export function getShippingOption(type: 'standard' | 'priority'): ShippingOption | null {
  const options = getShippingOptions()
  return options.find(option => option.type === type) || null
}

export function calculateShippingCost(type: 'standard' | 'priority'): number {
  const option = getShippingOption(type)
  if (!option) return 0
  
  // Priority shipping has a flat rate regardless of quantity
  // Standard shipping is free
  return option.price
}
