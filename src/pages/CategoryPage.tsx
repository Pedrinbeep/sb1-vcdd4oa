import React from 'react'
import { useParams } from 'react-router-dom'
import TodaysDeals from '../components/TodaysDeals'

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>()

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      <TodaysDeals />
    </div>
  )
}

export default CategoryPage