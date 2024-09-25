import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./navbar.css";
import logo from "../../../images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
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
            <Link to="/" className="nav-link mx-2">
              الرئيسية
            </Link>
            <Link to="/cources" className="nav-link mx-2">
              الدورات
            </Link>
            <Link to="/teachers" className="nav-link mx-2">
              المدربين
            </Link>
            <Link to="/mylearning" className="nav-link mx-2">
              اشتراكاتي
            </Link>
          </Nav>
          <Button onClick={()=> navigate("/login")} className="ml-2 login-btn ">تسجيل الدخول</Button>
          <button className="circle-btn-outline mt-2" onClick={()=> navigate("/register")}>ابدأ الآن</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ArabicNavbar;
