import React, { useEffect } from "react";
import "./startersection.css";
import 'aos/dist/aos.css';
import AOS from 'aos';
const StarterSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div class="starter-section" >
      <div class="hero-image">
        <div class="hero-text" >
          <h1 data-aos="fade-down">نجاحك يبدأ من هنا</h1>
          <p data-aos="fade-up">
            اكتشف مجموعة من الموارد والدروس التي ستساعدك على تحقيق أهدافك وتطوير
            مهاراتك. انطلق الآن وابدأ رحلتك نحو النجاح!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StarterSection;
