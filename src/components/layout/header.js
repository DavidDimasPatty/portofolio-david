import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import "../../assets/header.css";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [link, setLink] = useState();
  const nav = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLink(location.pathname);
  }, [location.pathname]);

  return (
    <Nav className="justify-content-center headers">
      <Nav.Item>
        <Nav.Link
          onClick={(e) => nav("/")}
          style={{ textDecoration: "none", color: "white" }}
        >
          Home <div className={link === "/" ? "line" : "hide"} />
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className="ms-4">
        <Nav.Link
          onClick={(e) => nav("/project")}
          style={{ textDecoration: "none", color: "white" }}
        >
          Projects <div className={link === "/project" ? "line" : "hide"} />
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Header;
