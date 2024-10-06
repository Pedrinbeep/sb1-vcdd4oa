import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import TodaysDeals from '../components/TodaysDeals'

const HomePage: React.FC = () => {
  return (
    <div>
      <FeaturedProducts />
      <TodaysDeals />
    </div>
  )
}

export default HomePage