import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../App'

const products: Product[] = [
  { id: 1, name: 'Wireless Earbuds', price: 79.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', description: 'High-quality wireless earbuds with noise cancellation.' },
  { id: 2, name: 'Stylish Sunglasses', price: 129.99, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80', description: 'Trendy sunglasses with UV protection.' },
  { id: 3, name: 'Portable Speaker', price: 59.99, image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', description: 'Compact and powerful portable Bluetooth speaker.' },
  { id: 4, name: 'Smart Watch', price: 199.99, image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', description: 'Feature-packed smartwatch with health tracking capabilities.' },
]

interface ProductGridProps {
  onProductClick: (product: Product) => void
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
      ))}
    </div>
  )
}

export default ProductGrid