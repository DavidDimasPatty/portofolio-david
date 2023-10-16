import React, { useEffect, useState } from "react";
import "../assets/homepage.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "./layout/header";
import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import perkenalan from "../assets/perkenalan.mp4";
import ReactPlayer from "react-player";
import Footer from "./layout/footer";

const HomePage = () => {
  const [position, setPosition] = useState();
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    countDown();
  }, []);

  const countDown = async () => {
    var arr = [
      "System Engineer",
      "Web Developer",
      "Mobile Developer",
      "Fresh Graduate",
    ];
    for (var i = 0; i < arr.length; i++) {
      var temp = "";
      for (var j = 0; j < arr[i].length; j++) {
        await delay(200);
        temp = temp + arr[i][j];
        setPosition(temp);
      }
      if (i + 1 == arr.length) {
        i = 0;
      }
      await delay(1000);
    }
  };

  return (
    <div>
      <Header />
      {/* Baris 1 */}
      <div style={{ backgroundColor: "#2E4374" }} className="pb-5">
        <Container>
          <Row className="justify-content-md-center">
            <Col className="mt-5" id="perkenalan">
              <Row className="mt-5">
                <center className="mt-2">
                  <h6>Hello, I'm</h6>
                </center>
              </Row>
              <Row>
                <center className="mt-1">
                  <h2>David Dimas Patty</h2>
                </center>
              </Row>
              <Row>
                <center>
                  <h3 style={{ fontWeight: "300" }}>A {position}</h3>
                </center>
              </Row>
              <Row>
                <Col className="mt-4">
                  <center>
                    <Button variant="light">Hire Me!</Button>
                    <a
                      className="ms-4"
                      href=""
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      View My Portofolio
                    </a>
                  </center>
                </Col>
              </Row>
            </Col>

            <Col className="mt-4" md="auto">
              <img class="framed" src={foto1} width={"300px"} alt="david" />
            </Col>

            <Col
              xs="4"
              className="row justify-content-center align-self-center mt-3"
            >
              <div>
                <Row className="mb-2 point">
                  <h3>Hard Work</h3>
                </Row>
                <Row className="mb-2 point">
                  <h3>Team Player</h3>
                </Row>
                <Row className="point">
                  <h3>Passion</h3>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Baris 2*/}
      <div className="pb-4 little">
        <Container>
          <Row>
            <Col className="mt-4">
              <center>
                <h2>A Little About Me</h2>
              </center>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <center className="ms-5">
                Hello, My name is David Dimas Patty, and I hail from Bandung,
                where I currently reside. I am the eldest of two siblings. I
                hold a degree in Computer Engineering from Parahyangan Catholic
                University. During my academic journey, I had the opportunity to
                engage in independent internships with three distinguished
                companies, although these contracts were not extended due to
                contractual constraints. This experience exposed me to various
                facets of web application development, particularly in the
                context of Laravel framework and PHP. My academic tenure also
                presented me with numerous projects. In many instances, I was
                entrusted with the role of project lead, overseeing team
                coordination and project scheduling. These projects encompassed
                the development of web applications, desktop applications,
                mobile applications on the Android platform, and AI systems. As
                a result of these experiences, I have cultivated proficiency in
                application development, deployment, database management, API
                integration, machine learning implementation, and effective
                collaboration within a team.
              </center>
            </Col>
            <Col>
              <center>
                <img class="framed2" src={foto2} width={"40%"} alt="david" />
              </center>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Baris 3 */}
      <div style={{ backgroundColor: "#2E4374" }}>
        <Container>
          <Row>
            <center>
              <h2>
                The programming languages I am proficient in for professional
                use:
              </h2>
            </center>
          </Row>
        </Container>
      </div>

      {/* Baris 4 */}
      <div style={{ backgroundColor: "#E5C3A6" }} className="pb-4">
        <Container>
          <Row>
            <center>
              <h2>Greetings from me</h2>
              <ReactPlayer url={perkenalan} controls={true} />
            </center>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
