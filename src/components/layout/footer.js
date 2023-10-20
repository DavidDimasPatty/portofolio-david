import React from "react";
import "../../assets/footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <footer>
      <center>
        <p className="mt-3">
          <strong>Portofolio </strong> by{" "}
          <a href="https://github.com/DavidDimasPatty">David Dimas Patty</a>
        </p>
        <div>Contact me on:</div>
        
        
          <Col className="mb-3">
            <FaInstagram onClick={()=>{window.open("https://www.instagram.com/daviddimasss/")}} className="me-2"/>{" "}
            <FaTwitter onClick={()=>{window.open("https://twitter.com/DavidGarpit/")}} className="me-2"/>{" "}
            <FaEnvelope onClick={()=>{window.open("https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ddimaspatty@gmail.com&subject=Contact%20Me%20")}} />{" "}
          </Col>{" "}
        
      </center>
    </footer>
  );
};

export default Footer;
