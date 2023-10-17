import React from "react";
import Nav from "react-bootstrap/Nav";
import "../../assets/header.css"
const Header = () => {
  return (
    <Nav className="justify-content-center headers" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/"  style={{ textDecoration: "none", color: "white" }}>Home</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="link-1"  href="/project" style={{ textDecoration: "none", color: "white" }}>Projects</Nav.Link>
    </Nav.Item>
  </Nav>
  );
};

export default Header;
