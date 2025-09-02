import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CountinousBar from './components/CountinousBar'
import WhyLeadCRM from './components/WhyLeadCRM'
import HowItWorks from './components/HowItWorks'
import Review from './components/Review'
import SalesSolution from './components/SalesSolution'
import SupportedLeadCRM from './components/SupportedLeadCRM'
import ProfessionalsBanner from './components/ProfessionalsBanner'
import Faq from './components/Faq'
import Footer from './components/Footer'
import FloatingPopup from './components/FloatingPopup'
import FixedPopUp from './components/FixedPopUp'

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CountinousBar />
      <WhyLeadCRM />
      <HowItWorks />
      <Review />
      <SalesSolution />
      <SupportedLeadCRM />
      <ProfessionalsBanner />
      <Faq />
      <Footer />
      <FloatingPopup />
      {/* <FixedPopUp /> */}
    </div>
  )
}

export default App