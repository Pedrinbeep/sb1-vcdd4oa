import React from 'react'
import { X } from 'lucide-react'
import { Product } from '../App'

interface ProductDetailProps {
  product: Product
  onClose: () => void
  onAddToCart: (product: Product) => void
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onAddToCart }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="p-4 flex flex-col md:flex-row">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 h-64 object-cover rounded-lg" />
          <div className="mt-4 md:mt-0 md:ml-4 flex-1">
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail