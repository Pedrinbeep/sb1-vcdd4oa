import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">We are a local store dedicated to bringing you the best tech products at competitive prices.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Computers & Laptops</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Smartphones</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">TV & Home Theatre</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Gaming</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Shipping Information</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Facebook</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Instagram</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; 2023 BITEX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer