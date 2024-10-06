import React from 'react'
import { useLocation } from 'react-router-dom'
import TodaysDeals from '../components/TodaysDeals'

const SearchResultsPage: React.FC = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const query = searchParams.get('q')

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Search Results for "{query}"</h1>
      <TodaysDeals />
    </div>
  )
}

export default SearchResultsPage