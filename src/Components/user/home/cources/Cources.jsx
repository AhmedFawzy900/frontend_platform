import React, { useRef } from "react";
import "./cources.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import img from "../../../../images/hero.jpg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
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

const Cources = () => {
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  return (
    <Container className="my-5 courses-part" id="cources">
      <h2 className="text-center mb-4">دوراتنا الاكثر مبيعًا</h2>
      <Row className="">
        <Swiper
          onSlideChange={() => console.log("slide change")}
          autoplay={{ delay: 3500, disableOnInteraction: false }} // Add autoplay with delay and keep running on user interaction
          loop={true} // Enable loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Autoplay]}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1, // Show 2 slides for small screens
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2, // Show 3 slides for medium screens
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3, // Show 4 slides for large screens
              spaceBetween: 40,
            },
          }}
        >
          {courses.map((course, index) => (
            <Col md={4} key={index}>
              <SwiperSlide>
                <Card className="mb-4 shadow-sm">
                  <Card.Img variant="top" src={course.image} />
                  <Card.Body>
                    <p>عنوان</p>
                    <Card.Title>{course.title}</Card.Title>
                    <div className="d-flex justify-content-between align-items-center">
                      <Card.Text className="price">{course.price}</Card.Text>
                      <button className="circle-btn-outline enroll-btn">
                        اشترك الآن
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Col>
          ))}
        </Swiper>
      </Row>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Link to={'/cources'} className="circle-btn-outline black-btn-bg">
          جميع الدورات
        </Link>
      </div>
    </Container>
  );
};

export default Cources;
