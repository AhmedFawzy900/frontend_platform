import React, { useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./meetMentors.css";
import img1 from "../../../../images/mentor1.jpg";
import img2 from "../../../../images/mentor2.jpg";
import img3 from "../../../../images/mentor3.jpg";
import img4 from "../../../../images/mentor4.jpg";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
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
  const swiperRef = useRef(null);
  const navigate = useNavigate();
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
          <Swiper
            onSlideChange={() => console.log("slide change")}
            autoplay={{ delay: 3200, disableOnInteraction: false }} // Add autoplay with delay and keep running on user interaction
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
                slidesPerView: 4, // Show 4 slides for large screens
                spaceBetween: 40,
              },
            }}
          >
            {mentors.map((mentor, index) => (
              <Col md={3} key={index}>
                <SwiperSlide>
                  <Card className="mb-4 shadow-sm text-center">
                    <Card.Img variant="top" src={mentor.image} loading="lazy" />
                    <Card.Body>
                      <Card.Title>{mentor.name}</Card.Title>
                      <Card.Text>{mentor.role}</Card.Text>
                      <p className="text-muted">
                        <SlowMotionVideoIcon className="icon" />{" "}
                        {mentor.courses}
                      </p>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              </Col>
            ))}
          </Swiper>
        </Row>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Link to={'/teachers'} className="circle-btn-outline black-btn-bg">
            جميع المعلمين
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default MeetMentors;
