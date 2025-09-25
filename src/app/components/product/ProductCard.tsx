import { Card, CardContent } from '@/app/components/ui/card'
import { formatPrice } from '@/app/lib/utils'
import { Product } from '@/app/types'
import Image from 'next/image'

interface ProductCardProps {
  product: Product
  onClick: (product: Product) => void
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-white"
      onClick={() => onClick(product)}
    >
      <CardContent className="p-4">
        <div className="aspect-[3/4] relative mb-3 bg-gray-100 rounded-md overflow-hidden">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              fill
              className="object-cover"
              onError={(e) => {
                const img = e.currentTarget as unknown as HTMLImageElement
                img.src = '/assets/products/placeholder.svg'
              }}
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-light-gray text-medium-gray">
              <span className="text-sm">No Image</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold text-dark-gray mb-2 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="space-y-1">
          <p className="text-primary-green font-medium text-lg">
            {formatPrice(product.price)}
          </p>
          <p className="text-sm text-medium-gray">
            {product.pages} pages • {product.cover_type}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
