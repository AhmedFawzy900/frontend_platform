import React from 'react'
import './homepage.css'
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar'
import HeroSection from '../../Components/user/hero/HeroSection'
import TrustedPartners from '../../Components/user/trusted_parteners/TrustedPartners '
import FeaturesSection from '../../Components/user/features/FeaturesSection'
import Cources from '../../Components/user/cources/Cources'
import MeetMentors from '../../Components/user/mentors/MeetMentors'
import ChooseUs from '../../Components/user/chooseUs/ChooseUs'
import Feedback from '../../Components/user/feedback/Feedback'
import Footer from '../../Components/user/footer/Footer'
const Homepage = () => {
  return (
    <div className='homepage'>
        <ArabicNavbar/>
        <HeroSection />
        <TrustedPartners />
        <FeaturesSection />
        <Cources />
        <MeetMentors />
        <ChooseUs />
        <Feedback />
        <Footer />
    </div>
  )
}

export default Homepage
