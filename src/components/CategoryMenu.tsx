import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
  'All Categories',
  'Computer',
  'Laptop',
  'Mobile',
  'TV',
  'Gaming',
  'Camera',
  'Tablet',
  'Watch'
]

const CategoryMenu: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 overflow-x-auto">
        <ul className="flex space-x-6 whitespace-nowrap">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                to={index === 0 ? '/' : `/category/${category.toLowerCase()}`}
                className="text-sm font-medium text-gray-600 hover:text-blue-600"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default CategoryMenu