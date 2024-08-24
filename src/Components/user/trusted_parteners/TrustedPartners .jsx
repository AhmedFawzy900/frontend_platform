import React from 'react'
import './trustedPartners.css'
import { Container, Row, Col, Image } from 'react-bootstrap';
// Import your partner logos here
import partner1 from '../../../images/un1.png';
import partner2 from '../../../images/un2.png';
import partner3 from '../../../images/un3.png';
import partner4 from '../../../images/un4.png';
import partner5 from '../../../images/un5.png';
const TrustedPartners  = () => {
  return (
    <Container className="trusted-partners" dir="rtl">
    <h2 className="text-center mb-4">شركاؤنا الموثوقون &amp; المستثمرون حول العالم</h2>
    <Row className="justify-content-center align-items-center">
      <Col xs={6} md={2}>
        <Image src={partner1} alt="Partner 1" fluid />
      </Col>
      <Col xs={6} md={2}>
        <Image src={partner2} alt="Partner 2" fluid />
      </Col>
      <Col xs={6} md={2}>
        <Image src={partner3} alt="Partner 3" fluid />
      </Col>
      <Col xs={6} md={2}>
        <Image src={partner4} alt="Partner 4" fluid />
      </Col>
      <Col xs={6} md={2}>
        <Image src={partner5} alt="Partner 5" fluid />
      </Col>
    </Row>
  </Container>
  )
}

export default TrustedPartners 
