import React from 'react'
import Navbar from '../component/Navbar'
import HeroImage from '../component/HeroImage'
import Footer from '../component/Footer'
import TrainingSection from '../component/Training'
const Training = () => {
  return (
    <div>
   <Navbar/>
   <HeroImage heading='TRAINING' text='Pre-Flight & Pre-Training.'/>
   <TrainingSection/>
   <Footer/>
    </div>
  )
}

export default Training
