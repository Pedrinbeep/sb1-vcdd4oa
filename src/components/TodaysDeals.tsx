import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
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
  {
    id: 2,
    name: 'Apple Magic Mouse',
    price: 55.49,
    oldPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: 'Bluetooth, White',
    category: 'Accessories'
  },
  {
    id: 3,
    name: 'Apple iMac',
    price: 1119.00,
    oldPrice: 1299.00,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: '8GB Memory 256GB M3 chip',
    category: 'Computer'
  },
  {
    id: 4,
    name: 'Apple 12.9 Inch iPad Pro',
    price: 1099.00,
    oldPrice: 1149.00,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    description: 'Wi-Fi 256GB 12.9-inch',
    category: 'Tablet'
  },
  {
    id: 5,
    name: 'Apple iPhone 15 Pro Max',
    price: 1059.99,
    oldPrice: 1199.99,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    description: '256GB Blue Titanium',
    category: 'Mobile'
  }
]

const TodaysDeals: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Today's Deals</h2>
        <Link to="/category/deals" className="text-blue-600 hover:underline flex items-center">
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
                    <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">${product.oldPrice?.toFixed(2)}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors">
                    Add to Cart
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

export default TodaysDeals