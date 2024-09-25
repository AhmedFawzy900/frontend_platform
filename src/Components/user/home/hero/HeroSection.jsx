import React, { useEffect } from "react";
import './heroSection.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroImage from '../../../../images/hero.jpg';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useNavigate } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
const HeroSection = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <Container fluid className="hero-section" dir="rtl" id="home">
      <Row className="align-items-center">
        <Col md={6} className="hero-text py-2" data-aos="fade-left" >
          <h1 className="hero-title">احصل على دورات عالمية من أفضل المدربين</h1>
          <p className="hero-subtitle">
            احصل على دورات عالية الجودة مع أفضل الأسعار. يمكنك الآن الحصول على
            أفضل الدورات من المدربين الرائدين حول العالم.
          </p>
          <div className="hero-buttons d-flex align-items-center ">
            <button className="mr-2 box-btn-filled" onClick={() => navigate("/register")}>
              ابدأ الآن
            </button>
            <button className="btn how-work">
            <PlayCircleOutlineIcon/> كيف يعمل؟   
            </button>
          </div>
        </Col>
        <Col md={6} className="p-0" data-aos="fade-right" >
          <img src={heroImage} alt="Hero" className="img-fluid" />
        </Col>
        {/* absolute elements */}
        <div className="active-students" data-aos="fade-up">
          <p className="count">200+</p>
          <p>الطلبة النشطة</p>
        </div>
        <div className="courses" data-aos="fade-down">
          <p className="count">50+</p>
          <p>الدورات</p>
        </div>
      </Row>
    </Container>
  );
};

export default HeroSection;
