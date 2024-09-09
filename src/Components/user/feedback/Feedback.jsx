import React, { useRef } from "react";
import "./feedback.css";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import person1 from "../../../images/avatar-01.png"; // Placeholder, replace with actual image
import person2 from "../../../images/avatar-02.png"; // Placeholder, replace with actual image
import person3 from "../../../images/avatar-03.png"; // Placeholder, replace with actual image
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
  },
];
const colors = [
  "var(--yellow-color)",
  "var(--blue-color)",
  "var(--pink-color)",
];

const Feedback = () => {
  const swiperRef = useRef(null); // Reference to Swiper instance
  return (
    <div className="feedback">
      <Container className="d-flex justify-content-between align-items-center">
        <h1>اراء العملاء</h1>
        <div className="buttons">
          <button className="box-btn-filled" onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowForwardIosIcon/>
          </button>
          <button className="box-btn-filled" onClick={() => swiperRef.current?.slideNext()}><ArrowBackIosIcon/></button>
        </div>
      </Container>
      <Container className="mt-3">
        <Row className="cards">
          <Swiper
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => (swiperRef.current = swiper)} // Store Swiper instance in ref
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1, // Show 2 slides for small screens
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1, // Show 3 slides for medium screens
                spaceBetween: 30,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3, // Show 4 slides for large screens
                spaceBetween: 40,
              },
            }}
          >
            {stories.map((story, index) => (
              <Col md={4} key={index} className="mb-4">
                <SwiperSlide>
                  <Card
                    className="h-100"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  >
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
                </SwiperSlide>
              </Col>
            ))}
          </Swiper>
        </Row>
      </Container>
    </div>
  );
};

export default Feedback;
