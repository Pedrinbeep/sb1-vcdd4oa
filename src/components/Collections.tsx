import React from 'react'
import { Link } from 'react-router-dom'

const collections = [
  {
    name: 'Tablet',
    items: ['iPad', 'Microsoft Surface', 'Samsung Galaxy', 'Amazon Fire', 'E-Readers'],
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    name: 'Smartphones',
    items: ['iPhone', 'Samsung Galaxy', 'Google'],
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  },
  {
    name: 'Smartwatches',
    items: ['Apple Watch', 'Samsung Galaxy', 'Android Smartwatches', 'Fitness Smartwatches', 'Smartwatch Accessories'],
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80'
  },
  {
    name: 'Accessories',
    items: ['Chargers', 'Power Banks', 'Cables', 'PC Fans', 'Mobile Covers'],
    image: 'https://images.unsplash.com/photo-1625799398940-8f8f4d1a1e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]

const Collections: React.FC = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((collection) => (
          <div key={collection.name} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-40">
              <img src={collection.image} alt={collection.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
              </div>
            </div>
            <div className="p-4">
              <ul className="text-sm text-gray-600">
                {collection.items.map((item, index) => (
                  <li key={index} className="mb-1">{item}</li>
                ))}
              </ul>
              <Link to={`/category/${collection.name.toLowerCase()}`} className="text-blue-600 hover:underline text-sm mt-2 block">
                All {collection.name} &gt;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collections