import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfiniteHoriontalScrollbar from './components/InfiniteHoriontalScrollbar'
import CrmDifference from './components/CrmDifference'
import HowItWorks from './components/HowItWorks'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfiniteHoriontalScrollbar />
      <CrmDifference />
      <HowItWorks />
    </div>
  )
}

export default App