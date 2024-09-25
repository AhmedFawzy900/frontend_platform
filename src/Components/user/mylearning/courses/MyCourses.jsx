import React, { useEffect } from "react";
import "./mycourses.css";
import { Container, Row, Col, Card, Button, Form, InputGroup } from "react-bootstrap";
import img from "../../../../images/hero.jpg";
import { Search } from "@mui/icons-material";
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
];

const MyCourses = () => {
  useEffect(() => {
    AOS.init({ duration: 1100 });
  }, []);
  return (
    <div className="my-courses container card mb-5">
      <div className="card-header p-3 d-flex justify-content-between">
        <h5>اشتراكاتي</h5>
        <div>
          <InputGroup className="search">
            <InputGroup.Text id="basic-addon1"><Search/></InputGroup.Text>
            <Form.Control
              placeholder="بحث..."
              aria-label="search"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
      </div>
      <div className="card-body">
        {/* if no courses */}
        {/* <p className="text-center">ليس لديك اشتراكات حتى الان</p> */}

        {/* if there is  courses */}
        <Container className=" " >
          <Row className="">
            {courses.map((course, index) => (
              <Col md={6} lg={4} key={index} data-aos="zoom-out">
                <Card className="mb-4 shadow-sm ">
                  <Card.Img variant="top" src={course.image} loading="lazy"   />
                  <Card.Body>
                    <p>عنوان</p>
                    <Card.Title>{course.title}</Card.Title>
                    <div className="d-flex justify-content-center align-items-center">
                      <button className="circle-btn-outline enroll-btn">
                       مشاهدة الدورة
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MyCourses;
