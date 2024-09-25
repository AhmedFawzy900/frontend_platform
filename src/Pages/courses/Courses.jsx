import React, { useEffect } from 'react'
import './courses.css'
import ArabicNavbar from '../../Components/user/nav/ArabicNavbar'
import Footer from '../../Components/user/footer/Footer'
import Cources from '../../Components/user/home/cources/Cources'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from "../../images/hero.jpg";
import 'aos/dist/aos.css';
import AOS from 'aos';
const courses = [
  {
    title: "كن مصمم ويب كامل في 5 أشهر",
    price: "$190.00",
    image: img, 
  },
  {
    title: "تعلم تصميم واجهات المستخدم مع المزيد من النظرية والتطبيق",
    price: "$180.00",
    image: img, 
  },
  {
    title: "كن مطورًا مبتدئًا في 3 أشهر",
    price: "$210.00",
    image: img, 
  },
  {
    title: "كن مصمم ويب كامل في 5 أشهر",
    price: "$190.00",
    image: img, 
  },
  {
    title: "تعلم تصميم واجهات المستخدم مع المزيد من النظرية والتطبيق",
    price: "$180.00",
    image: img, 
  },
  {
    title: "كن مطورًا مبتدئًا في 3 أشهر",
    price: "$210.00",
    image: img, 
  },
];
const Courses = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <div>
      <ArabicNavbar />
      {/* content */}
      <Container className="my-5 courses-part" id="cources">
      <Row className="">
        {courses.map((course, index) => (
          <Col md={4} key={index} data-aos="fade-up">
            <Card className="mb-4 shadow-sm">
              <Card.Img variant="top" src={course.image} />
              <Card.Body>
                <p>عنوان</p>
                <Card.Title>{course.title}</Card.Title>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Text className="price">{course.price}</Card.Text>
                    <button className="circle-btn-outline enroll-btn">اشترك الآن</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
      {/* content */}
      <Footer />
    </div>
  )
}

export default Courses
