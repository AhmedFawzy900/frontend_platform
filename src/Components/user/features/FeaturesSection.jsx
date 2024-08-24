import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SchoolIcon from '@mui/icons-material/School';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './featuresSection.css'; // You'll create this CSS file for custom styles

const FeaturesSection = () => {
  return (
<Container fluid className="features-section" dir="rtl">
      <Row className="justify-content-center gap-4">
        <Col md={3} className="feature-box text-right" style={{ backgroundColor: '#fffbea' }}>
        <div className="icon-container i1">
            <SchoolIcon className="feature-icon" />
          </div>
          <div>
            <h4>أفضل المدربين</h4>
            <p>لدينا مدربين مؤهلين بدرجة عالية وخبرة واسعة في جميع أنحاء العالم.</p>
          </div>
        </Col>
        <Col md={3} className="feature-box text-right" style={{ backgroundColor: '#fbeff4' }}>
        <div className="icon-container i2">
            <LiveTvIcon className="feature-icon" />
          </div>
          <div>
            <h4>فصل مباشر</h4>
            <p>نحن نقدم لطلابنا أفضل تعليم من خلال الفصول المباشرة.</p>
          </div> 
        </Col>
        <Col md={3} className="feature-box text-right" style={{ backgroundColor: '#e9f9f5' }}>
          <div className="icon-container i3">
            <SupportAgentIcon className="feature-icon" />
          </div>
         <div>
            <h4>دعم 1 إلى 1</h4>
            <p>نقدم لطلابنا الدعم الأفضل على مدار الساعة طوال أيام الأسبوع.</p>
         </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FeaturesSection;
