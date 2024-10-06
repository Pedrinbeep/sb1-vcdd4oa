import React from 'react'
import { Product } from '../App'

interface ProductCardProps {
  product: Product
  onClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={onClick}>
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCard