import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import InfiniteHoriontalScrollbar from './components/InfiniteHoriontalScrollbar'
import CrmDifference from './components/CrmDifference'
import HowItWorks from './components/HowItWorks'
import Review from './components/Review'
import SalesSolution from './components/SalesSolution'
import SupportedLeadCRM from './components/SupportedLeadCRM'
import JoinProffesional from './components/JoinProffesional'
import Faq from './components/Faq'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <InfiniteHoriontalScrollbar />
      <CrmDifference />
      <HowItWorks />
      <Review />
      <SalesSolution />
      <SupportedLeadCRM />
      <JoinProffesional />
      <Faq />
      <Footer />
    </div>
  )
}

export default App