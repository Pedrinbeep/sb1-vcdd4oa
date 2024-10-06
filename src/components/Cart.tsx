import React from 'react'
import { X } from 'lucide-react'
import { Product } from '../App'

interface CartProps {
  isOpen: boolean
  onClose: () => void
  items: Product[]
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null

  const total = items.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">Your Cart</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="p-4 border-t">
          <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart