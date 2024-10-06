import React from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Praesent vestibulum nisi at mollis mollis',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et amet faucibus, nec dictum lectus...',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80'
  },
  {
    id: 2,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et amet faucibus, nec dictum lectus...',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80'
  },
  {
    id: 3,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et amet faucibus, nec dictum lectus...',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
  }
]

const LatestPosts: React.FC = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <Link to="/blog" className="text-blue-600 hover:underline flex items-center">
          view all <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Link to={`/blog/${post.id}`}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestPosts