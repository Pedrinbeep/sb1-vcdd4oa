import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ShoppingCart, Heart, User, Search } from 'lucide-react'

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`)
  }

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-3xl font-bold text-blue-600">BITEX</Link>
        <form onSubmit={handleSearch} className="flex-grow mx-4 relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </form>
        <nav className="flex items-center space-x-4">
          <Link to="/account" className="flex items-center text-gray-600 hover:text-blue-600">
            <User className="h-6 w-6 mr-1" />
            <span className="hidden md:inline">Account</span>
          </Link>
          <Link to="/wishlist" className="flex items-center text-gray-600 hover:text-blue-600">
            <Heart className="h-6 w-6 mr-1" />
            <span className="hidden md:inline">Wishlist</span>
          </Link>
          <Link to="/cart" className="flex items-center text-gray-600 hover:text-blue-600">
            <ShoppingCart className="h-6 w-6 mr-1" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header