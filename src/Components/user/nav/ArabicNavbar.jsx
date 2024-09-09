import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css";
import logo from "../../../images/logo1.png";
const ArabicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" dir="rtl">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#" className="nav-link mx-2">
              الرئيسية
            </Nav.Link>
            <Nav.Link href="#" className="nav-link mx-2">
              الدورات
            </Nav.Link>
            <Nav.Link href="#" className="nav-link mx-2">
              المدربين
            </Nav.Link>
            <Nav.Link href="#" className="nav-link mx-2">
              من نحن
            </Nav.Link>
          </Nav>
          <Button className="ml-2 login-btn">تسجيل الدخول</Button>
          <button className="circle-btn-outline">ابدأ الآن</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ArabicNavbar;
