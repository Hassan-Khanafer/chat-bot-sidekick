import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/app/components/ui/dialog'
import { Product } from '@/app/types'
import { formatPrice } from '@/app/lib/utils'
import Image from 'next/image'

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-dark-gray">
            {product.name}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="aspect-[3/4] relative bg-gray-100 rounded-md overflow-hidden">
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
                <span>No Image Available</span>
              </div>
            )}
          </div>
          
          <div className="space-y-4">
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-medium-gray">Price</label>
                <p className="text-2xl font-bold text-primary-green">
                  {formatPrice(product.price)}
                </p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-medium-gray">Pages</label>
                <p className="text-lg text-dark-gray">{product.pages}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-medium-gray">Cover Type</label>
                <p className="text-lg text-dark-gray">{product.cover_type}</p>
              </div>
              
              <div>
                <label className="text-sm font-medium text-medium-gray">Shipment Time</label>
                <p className="text-lg text-dark-gray">{product.shipment_days || 3} business days</p>
              </div>
            </div>
            
            {product.description && (
              <div>
                <label className="text-sm font-medium text-medium-gray">Description</label>
                <p className="text-sm text-dark-gray leading-relaxed mt-1">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
