import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css";
import logo from "../../../images/logo1.png";
import { useNavigate } from "react-router-dom";
const ArabicNavbar = () => {
  const navigate = useNavigate();
  return (
    <Navbar bg="light" expand="lg" dir="rtl" className="arabic-navbar">
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="/" className="nav-link mx-2">
              الرئيسية
            </Nav.Link>
            <Nav.Link href="/cources" className="nav-link mx-2">
              الدورات
            </Nav.Link>
            <Nav.Link href="/teachers" className="nav-link mx-2">
              المدربين
            </Nav.Link>
            <Nav.Link href="/mylearning" className="nav-link mx-2">
              اشتراكاتي
            </Nav.Link>
          </Nav>
          <Button onClick={()=> navigate("/login")} className="ml-2 login-btn ">تسجيل الدخول</Button>
          <button className="circle-btn-outline mt-2" onClick={()=> navigate("/register")}>ابدأ الآن</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ArabicNavbar;
