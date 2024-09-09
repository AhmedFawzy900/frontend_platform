import React, { useState, useEffect } from 'react';
import './homepage.css';
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar';
import HeroSection from '../../Components/user/hero/HeroSection';
import FeaturesSection from '../../Components/user/features/FeaturesSection';
import Cources from '../../Components/user/cources/Cources';
import MeetMentors from '../../Components/user/mentors/MeetMentors';
import ChooseUs from '../../Components/user/chooseUs/ChooseUs';
import Feedback from '../../Components/user/feedback/Feedback';
import Footer from '../../Components/user/footer/Footer';
import BackToTopButton from '../../Components/user/backToTop/BackToTopButton';
import TrustedPartners from '../../Components/user/trusted_parteners/TrustedPartners ';
// import TrustedPartners from '../../Components/user/trusted_parteners/TrustedPartners'
// Loader Component (Spinner or any animation)
const Loader = () => {
  return (
    <div className="loader"></div>
  );
};

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className='homepage'>
        <>
          <ArabicNavbar />
          <HeroSection />
          <TrustedPartners />
          <FeaturesSection />
          <Cources />
          <MeetMentors />
          <ChooseUs />
          <Feedback />
          <Footer />

          {/* back to top button */}
          <BackToTopButton />
        </>
    </div>
  );
};

export default Homepage;
