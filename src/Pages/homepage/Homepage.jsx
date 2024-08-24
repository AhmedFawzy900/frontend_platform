import React from 'react'
import './homepage.css'
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar'
import HeroSection from '../../Components/user/hero/HeroSection'
import TrustedPartners from '../../Components/user/trusted_parteners/TrustedPartners '
import FeaturesSection from '../../Components/user/features/FeaturesSection'
const Homepage = () => {
  return (
    <div className='homepage'>
        <ArabicNavbar/>
        <HeroSection />
        <TrustedPartners />
        <FeaturesSection />
    </div>
  )
}

export default Homepage
