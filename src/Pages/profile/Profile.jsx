import React from "react";
import ArabicNavbar from "../../Components/user/nav/ArabicNavbar";
import Footer from "../../Components/user/footer/Footer";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  ProgressBar,
  Image,
} from "react-bootstrap";
import "./profile.css";
import img from '../../images/avatar-01.png';

const Profile = () => {
  return (
    <>
      <ArabicNavbar />
      {/* content */}
      <Container className="my-5 profile">
        <Row>
          {/* Right Side - Profile Info */}
          <Col md={4}>
            <div className="card py-5">
              <div className="text-center card-item">
                <Image
                  src={img}
                  roundedCircle
                  alt="Profile"
                  className="mb-3 profile-img"
                />
                <h4>John Doe</h4>
                <p>
                  Full Stack Developer
                  <br />
                  Bay Area, San Francisco, CA
                </p>
              </div>
            </div>
          </Col>
          {/* Left Side - Form */}
          <Col md={8}>
            <div className="card p-5">
              <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                  <Form.Label>الاسم</Form.Label>
                  <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>الايميل</Form.Label>
                  <Form.Control type="email" placeholder="john@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>رقم الهاتف</Form.Label>
                  <Form.Control type="text" placeholder="816-9029 (239)" />
                </Form.Group>

                <Button className="box-btn-filled profile-btn" type="submit">
                  حفظ
                </Button>
              </Form>

              {/* Project Status */}
              <Row className="mt-5 ">
                <Col md={12}>
                  <h4 className="enrollments">الاشتراكات</h4>
                  <p className="mt-3 mb-1">Web Design</p>
                  <ProgressBar now={60} label={`${60}%`} />
                </Col>
                <Col md={12} className="mt-4 ">
                  <p className="mb-1">Website Markup</p>
                  <ProgressBar now={40} label={`${40}%`} />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {/* content */}
      <Footer />
    </>
  );
};

export default Profile;
