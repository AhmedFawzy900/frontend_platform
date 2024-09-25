import React, { useState, useEffect } from "react";
import "./homepage.css";
import ArabicNavbar from "../../Components/user/nav/ArabicNavbar";
import HeroSection from "../../Components/user/home/hero/HeroSection";
import FeaturesSection from "../../Components/user/home/features/FeaturesSection";
import Cources from "../../Components/user/home/cources/Cources";
import MeetMentors from "../../Components/user/home/mentors/MeetMentors";
import ChooseUs from "../../Components/user/home/chooseUs/ChooseUs";
import Feedback from "../../Components/user/home/feedback/Feedback";
import Footer from "../../Components/user/footer/Footer";
import BackToTopButton from "../../Components/user/backToTop/BackToTopButton";
import TrustedPartners from "../../Components/user/home/trusted_parteners/TrustedPartners ";
import Categories from "../../Components/user/home/categories/Categories";
import 'aos/dist/aos.css';
import AOS from 'aos';
const Homepage = () => {
  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => console.log("IP address:", data.ip))
      .catch((error) => console.error("Error fetching IP address:", error));
  }, []);
  return (
    <div className="homepage">
        <ArabicNavbar />
        <HeroSection />
        <Categories />
        <TrustedPartners />
        <FeaturesSection />
        <Cources />
        <MeetMentors />
        <ChooseUs />
        <Feedback />
        <Footer />
        {/* back to top button */}
        <BackToTopButton />
    </div>
  );
};

export default Homepage;
