import { Product, TrilogyDeal } from '@/app/types'

export function getTrilogyDeals(products: Product[]): TrilogyDeal[] {
  const deals: TrilogyDeal[] = []
  
  // Group products by trilogy
  const trilogies = products.reduce((acc, product) => {
    if (product.trilogy_id) {
      if (!acc[product.trilogy_id]) {
        acc[product.trilogy_id] = []
      }
      acc[product.trilogy_id].push(product)
    }
    return acc
  }, {} as Record<string, Product[]>)
  
  // Create deals for each trilogy
  Object.entries(trilogies).forEach(([trilogyId, trilogyBooks]) => {
    if (trilogyBooks.length >= 2) { // Only create deals for trilogies with 2+ books
      const sortedBooks = trilogyBooks.sort((a, b) => (a.trilogy_order || 0) - (b.trilogy_order || 0))
      const individualPrice = sortedBooks.reduce((sum, book) => sum + book.price, 0)
      const bundlePrice = Math.round(individualPrice * 0.85 * 100) / 100 // 15% discount
      const savings = individualPrice - bundlePrice
      
      deals.push({
        trilogy_id: trilogyId,
        trilogy_name: getTrilogyName(trilogyId),
        individual_price: individualPrice,
        bundle_price: bundlePrice,
        savings: savings,
        books: sortedBooks
      })
    }
  })
  
  return deals
}

export function getTrilogyDeal(trilogyId: string, products: Product[]): TrilogyDeal | null {
  const deals = getTrilogyDeals(products)
  return deals.find(deal => deal.trilogy_id === trilogyId) || null
}

function getTrilogyName(trilogyId: string): string {
  const names: Record<string, string> = {
    'lotr': 'The Lord of the Rings',
    'hunger-games': 'The Hunger Games'
  }
  return names[trilogyId] || 'Unknown Trilogy'
}

export function getAgeRecommendation(product: Product): string {
  return product.age_recommendation || 'Not specified'
}

export function getGenreRecommendations(products: Product[], targetGenre: string): Product[] {
  return products.filter(product => 
    product.genre?.toLowerCase().includes(targetGenre.toLowerCase())
  )
}
