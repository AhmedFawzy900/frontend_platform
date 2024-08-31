import React from "react";
import "./feedback.css";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import person1 from "../../../images/avatar-01.png"; // Placeholder, replace with actual image
import person2 from "../../../images/avatar-02.png"; // Placeholder, replace with actual image
import person3 from "../../../images/avatar-03.png"; // Placeholder, replace with actual image

const stories = [
  {
    title: "أفضل منصة",
    description:
      "لقد كانت تجربتي مع هذه المنصة رائعة. المحتوى غني والمدربين ممتازين.",
    customer: "مها أحمد",
    image: person1,
  },
  {
    title: "معلمين من الطراز الأول",
    description: "المعلمين هنا محترفين للغاية وقدموا لي دعماً لا يقدر بثمن.",
    customer: "خالد محمد",
    image: person2,
  },
  {
    title: "موصى به بشدة",
    description: "أنصح الجميع بالانضمام إلى هذه المنصة. التعليم هنا مميز جداً.",
    customer: "ليلى عبد الله",
    image: person3,
  },
  {
    title: "موصى به بشدة",
    description: "أنصح الجميع بالانضمام إلى هذه المنصة. التعليم هنا مميز جداً.",
    customer: "ليلى عبد الله",
    image: person3,
  },
  {
    title: "موصى به بشدة",
    description: "أنصح الجميع بالانضمام إلى هذه المنصة. التعليم هنا مميز جداً.",
    customer: "ليلى عبد الله",
    image: person3,
  },
  {
    title: "موصى به بشدة",
    description: "أنصح الجميع بالانضمام إلى هذه المنصة. التعليم هنا مميز جداً.",
    customer: "ليلى عبد الله",
    image: person3,
  }
];
const colors = ["var(--yellow-color)", "var(--blue-color)", "var(--pink-color)"];
const Feedback = () => {
  return (
    <div className="feedback">
      <Container>
        <h1>اراء العملاء</h1>
        <div className="buttons"></div>
      </Container>
      <Container className="mt-3">
        <Row className="cards" >
          {stories.map((story, index) => (
                <Col md={4}  key={index} className="mb-4">
                <Card className="h-100" style={{ backgroundColor: colors[index % colors.length] }}>
                    <Card.Body>
                    <Card.Title>{story.title}</Card.Title>
                    <Card.Text>{story.description}</Card.Text>
                    </Card.Body>
                    <div className="d-flex align-items-center">
                    <Card.Img
                        variant="top"
                        src={story.image}
                        className="rounded-circle me-3 mt-2"
                        style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                        }}
                    />
                    <div className="customer-info">
                        <h6 className="">{story.customer}</h6>
                        <p className="text-muted ">طالب</p>
                    </div>
                    </div>
                </Card>
                </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
