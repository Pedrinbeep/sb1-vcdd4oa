import React from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../types'

const products: Product[] = [
  {
    id: 1,
    name: 'Apple Airpods MAX',
    price: 519.00,
    oldPrice: 579.00,
    image: 'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Wireless Noise Cancelling Built-In Microphone',
    category: 'Audio'
  },
  // ... other products
]

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const product = products.find(p => p.id === Number(productId))

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg" />
      </div>
      <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="mb-4">
          <span className="text-2xl font-bold text-red-600">${product.price.toFixed(2)}</span>
          {product.oldPrice && (
            <span className="text-lg text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
          )}
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductPage