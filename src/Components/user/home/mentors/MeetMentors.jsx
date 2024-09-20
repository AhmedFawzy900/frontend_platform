import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./meetMentors.css";
import img1 from "../../../../images/mentor1.jpg";
import img2 from "../../../../images/mentor2.jpg";
import img3 from "../../../../images/mentor3.jpg";
import img4 from "../../../../images/mentor4.jpg";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
const mentors = [
  {
    name: "ايمان محمد",
    role: "خبير تطوير الويب",
    courses: "5 دورات",
    image: img1,
  },
  {
    name: "سارة يوسف",
    role: "مدربة تصميم UX/UI",
    courses: "8 دورات",
    image: img2,
  },
  {
    name: "محمد علي",
    role: "محاضر علوم البيانات",
    courses: "6 دورات",
    image: img3,
  },
  {
    name: "ليلى حسن",
    role: "مدربة التسويق الرقمي",
    courses: "7 دورات",
    image: img4,
  },
];

const MeetMentors = () => {
  return (
    <div className="mentors-section" id="mentors">
      <Container className="my-5 mentors">
        <h2 className="text-center mb-4">تعرف على معلمينا المهرة</h2>
        <p className="text-center mb-4">
          معلمونا من ذوي الخبرة العالية يغطون مجموعة واسعة من الموضوعات
          والمهارات المتقدمة. تعلم من الأفضل واكتسب المهارات اللازمة لتحقيق
          أهدافك المهنية.
        </p>
        <Row>
          {mentors.map((mentor, index) => (
            <Col md={3} key={index}>
              <Card className="mb-4 shadow-sm text-center">
                <Card.Img variant="top" src={mentor.image} loading="lazy" />
                <Card.Body>
                  <Card.Title>{mentor.name}</Card.Title>
                  <Card.Text>{mentor.role}</Card.Text>
                  <p className="text-muted">
                    <SlowMotionVideoIcon className="icon" /> {mentor.courses}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <button className="circle-btn-outline black-btn-bg">
            جميع المعلمين            
          </button>
        </div>
      </Container>
    </div>
  );
};

export default MeetMentors;
