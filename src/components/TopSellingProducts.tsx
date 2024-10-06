import React from 'react'
import { ChevronRight, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Product } from '../types'

const products: Product[] = [
  {
    id: 1,
    name: 'Apple Airpods Pro',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
    description: 'Built-in Microphone, 3rd generation, Water Resistant',
    category: 'Audio'
  },
  {
    id: 2,
    name: 'Apple Watch Ultra 2',
    price: 799.00,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    description: 'GPS + Cellular, Titanium, 49mm',
    category: 'Wearables'
  },
  {
    id: 3,
    name: 'ASUS ROG Laptop',
    price: 2169.99,
    oldPrice: 2499.99,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80',
    description: '32GB RAM, 17inch display, OLED Display',
    category: 'Laptop'
  },
  {
    id: 4,
    name: 'PS5 Controller',
    price: 69.00,
    image: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Bluetooth, Version 2',
    category: 'Gaming'
  },
  {
    id: 5,
    name: 'Sony Alpha 7RV',
    price: 3699.00,
    oldPrice: 4499.00,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80',
    description: 'Full Frame, Body, 60MP',
    category: 'Camera'
  }
]

const TopSellingProducts: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Top Selling Products</h2>
        <Link to="/category/top-selling" className="text-blue-600 hover:underline flex items-center">
          view all <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="text-gray-400 hover:text-red-500">
                    <Heart className="h-6 w-6" />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopSellingProducts