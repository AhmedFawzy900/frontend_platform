import React from "react";
import "./cources.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from "../../../../images/hero.jpg";

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
];

const Cources = () => {
  return (
    <Container className="my-5 courses-part" id="cources">
      <h2 className="text-center mb-4">دوراتنا الاكثر مبيعًا</h2>
      <Row className="">
        {courses.map((course, index) => (
          <Col md={4} key={index}>
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
      <div className="d-flex justify-content-center align-items-center mt-4">
        <button className="circle-btn-outline black-btn-bg">جميع الدورات</button>
      </div>
    </Container>
  );
};

export default Cources;
