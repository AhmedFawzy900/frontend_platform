import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import logo2 from '../../../images/logo2.png';
const Footer = () => {
  return (
    <footer className="footer" dir="rtl">
      <Container>
        <Row>
          <Col md={2} className='d-flex align-items-center justify-content-center mb-3'>
            <img src={logo2} className='' alt="" />
          </Col>
          <Col md={2}>
            <h6>معلومات عنا</h6>
            <ul>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#careers">الوظائف</a></li>
              <li><a href="#blog">المدونة</a></li>
              <li><a href="#terms">شروط الخدمة</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>الشركة</h6>
            <ul>
              <li><a href="#privacy">سياسة الخصوصية</a></li>
              <li><a href="#security">الأمان</a></li>
              <li><a href="#support">الدعم</a></li>
              <li><a href="#contact">الاتصال</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>الدعم</h6>
            <ul>
              <li><a href="#faq">الأسئلة الشائعة</a></li>
              <li><a href="#help">مركز المساعدة</a></li>
              <li><a href="#feedback">التعليقات</a></li>
              <li><a href="#accessibility">إمكانية الوصول</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h6>تحميل التطبيق</h6>
            <p>قم بتحميل تطبيقنا من متجر التطبيقات أو جوجل بلاي مجانًا.</p>
            <a href="#appstore" className="btn btn-dark">تحميل الآن</a>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <p>&copy; 2024 تك مايندز. جميع الحقوق محفوظة.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
