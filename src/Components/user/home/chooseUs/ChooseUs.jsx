import React, { useEffect } from "react";
import "./chooseUs.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import img1 from "../../../../images/cho1.jpg";
import img2 from "../../../../images/cho2.jpg";
import SupportIcon from "@mui/icons-material/SupportAgent";
import SchoolIcon from "@mui/icons-material/School";
import BookIcon from "@mui/icons-material/Book";
import ChatIcon from "@mui/icons-material/Chat";
import "aos/dist/aos.css";
import AOS from "aos";
const features = [
  {
    title: "أفضل نظام دعم",
    description: "نحن نوفر دعمًا مخصصًا لطلابنا لضمان تجربة تعليمية سلسة.",
    icon: <SupportIcon style={{ fontSize: 50, color: "#ff9800" }} />,
  },
  {
    title: "مدربين خبراء",
    description: "تعلم من أفضل المدربين ذوي الخبرة العالية في مجالاتهم.",
    icon: <SchoolIcon style={{ fontSize: 50, color: "#3f51b5" }} />,
  },
  {
    title: "أفضل الدورات",
    description:
      "نقدم مجموعة متنوعة من الدورات المتقدمة التي تلبي جميع احتياجاتك.",
    icon: <BookIcon style={{ fontSize: 50, color: "#4caf50" }} />,
  },
  {
    title: "تواصل واضح",
    description: "نحرص على التواصل الواضح والفعال بين الطلاب والمدربين.",
    icon: <ChatIcon style={{ fontSize: 50, color: "#f44336" }} />,
  },
];

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1300 });
  }, []);
  return (
    <div className="choose-us" id="choose-us">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} data-aos="fade-left">
            <h2 className="choose-us-title">
              لماذا يختارانا الناس عن باقي المنصات؟
            </h2>
            <div className="choose-us-imgs">
              <img src={img1} alt="" className="img1" />
              <img src={img2} alt="" className="img2" />
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} data-aos="fade-right">
            <p className="choose-us-desc mb-4">
              {" "}
              نحن نلتزم بتقديم أفضل تجربة تعليمية لطلابنا من خلال توفير دعم مخصص
              ومدربين ذوي خبرة عالية. نقدم مجموعة من الدورات المتقدمة مع تواصل
              واضح لضمان تحقيق أهدافك التعليمية.
            </p>
            <Row>
              {features.map((feature, index) => (
                <Col lg={6} md={12} sm={12} key={index} className="mb-4" data-aos="fade-up">
                  <Card className="h-100">
                    <Card.Body className="d-flex align-items-center">
                      <div className="mx-3">{feature.icon}</div>
                      <div className="text">
                        <Card.Title>{feature.title}</Card.Title>
                        <Card.Text>{feature.description}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChooseUs;
