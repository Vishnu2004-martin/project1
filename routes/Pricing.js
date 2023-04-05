import React from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import PricingCards from '../component/Pricing'
import HeroImage from '../component/HeroImage'

const Pricing = () => {
  return (
    <div>
       <Navbar/>
       <HeroImage heading='PRICING.' text='Choose your trip.'/>
       <PricingCards/>
       <Footer/>
      
    </div>
  )
}

export default Pricing
