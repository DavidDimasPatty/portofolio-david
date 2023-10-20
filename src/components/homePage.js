import React, { useEffect, useState } from "react";
import "../assets/homepage.css";
import { Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BiLogoFlutter } from "react-icons/bi";
import { SiKotlin, SiCsharp, SiMysql } from "react-icons/si";
import Header from "./layout/header";
import foto1 from "../assets/foto1.jpeg";
import foto2 from "../assets/foto2.jpeg";
import kopi1 from "../assets/kopi 1.jpeg";
import kopi2 from "../assets/kopi 2.jpeg";
import kopi3 from "../assets/kopi 3.jpeg";
import kopi4 from "../assets/kopi 4.jpeg";
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
        await delay(150);
        temp = temp + arr[i][j];
        setPosition(temp);
      }
      if (i + 1 == arr.length) {
        i = 0;
      }
      await delay(300);
    }
  };

  function mouseOver(text) {
    var textAddElement = document.getElementById("textAdd");
    textAddElement.innerText = "I am a " + text;

    textAddElement.classList.add("animate");

    // Jeda sebentar sebelum menambahkan kelas kembali untuk memicu ulang animasi
    setTimeout(function () {
      textAddElement.classList.remove("animate");
    }, 10); // Sesuaikan delay sesuai kebutuhan
  }

  function mouseOut() {
    var textAddElement = document.getElementById("textAdd");
    textAddElement.innerText = "I am a...";

    textAddElement.classList.add("animate");
  }

  return (
    <div>
      <Header />
      {/* Baris 1 */}
      <div className="pb-5 bg">
        <Container>
          <Row>
            <Col className="mt-5" id="perkenalan" xs={3}>
              <Row className="mt-5">
                <center className="mt-2">
                  <h6>Hello 👋, I'm</h6>
                </center>
              </Row>
              <Row>
                <center className="mt-1">
                  <h2>David Dimas Patty</h2>
                </center>
              </Row>
              <Row className="mb-2 mt-2">
                <center>
                  <h3 style={{ fontWeight: "300" }}>A {position}</h3>
                </center>
              </Row>
              <Row>
                <center>
                  I currently reside in Bandung, Indonesia. I am the eldest of
                  two siblings. I hold a degree in Computer Engineering from
                  Parahyangan Catholic University. During my academic journey, I
                  had the opportunity to engage in independent internships with
                  three distinguished companies to gain my experiences in real
                  industries.
                </center>
              </Row>
              <Row>
                <Col className="mt-4">
                  <center>
                    <Button
                      variant="light"
                      onClick={() => {
                        window.open(
                          "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=ddimaspatty@gmail.com&subject=Contact%20Me%20"
                        );
                      }}
                    >
                      Hire Me!
                    </Button>
                    <a
                      className="ms-4"
                      href="/project"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      My Portofolio
                    </a>
                  </center>
                </Col>
              </Row>
            </Col>

            <Col
              className="mt-4 row justify-content-center align-self-center"
              md="auto"
            >
              <img class="framed" src={foto1} alt="david" />
            </Col>

            <Col
              xs="4"
              className="row justify-content-center align-self-center mt-3 ms-2"
            >
              <Row className="mb-4 d-flex">
                <h2 id="textAdd">I am a... </h2>
              </Row>
              <Col className="me-3">
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Hard Work")}
                    onMouseOut={() => mouseOut()}
                  >
                    Hard Work
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Team Player")}
                    onMouseOut={() => mouseOut()}
                  >
                    Team Player
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Passionate")}
                    onMouseOut={() => mouseOut()}
                  >
                    Passionate
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Polite")}
                    onMouseOut={() => mouseOut()}
                  >
                    Polite
                  </h3>
                </Row>
                <Row className="point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Curious")}
                    onMouseOut={() => mouseOut()}
                  >
                    Curious
                  </h3>
                </Row>
              </Col>

              <Col>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Relentless")}
                    onMouseOut={() => mouseOut()}
                  >
                    Relentless
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Humble")}
                    onMouseOut={() => mouseOut()}
                  >
                    Humble
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Friendly")}
                    onMouseOut={() => mouseOut()}
                  >
                    Friendly
                  </h3>
                </Row>
                <Row className="mb-3 point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Loyal")}
                    onMouseOut={() => mouseOut()}
                  >
                    Loyal
                  </h3>
                </Row>
                <Row className="point">
                  <h3
                    style={{ "font-weight": "200" }}
                    onMouseOver={() => mouseOver("Deligent")}
                    onMouseOut={() => mouseOut()}
                  >
                    Deligent
                  </h3>
                </Row>
              </Col>
              <Row className="mt-4">
                <h2 id="textEnd">Person</h2>
              </Row>
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
                <h2 className="mb-1">
                  A Little About Me <div id="bawah1" className="mt-2" />{" "}
                </h2>
              </center>
            </Col>
            <Col className="mt-4">
              <center>
                <h2 className="mb-1">
                  My Hobby <div id="bawah2" className="mt-2" />{" "}
                </h2>
              </center>
            </Col>
          </Row>
          <Row>
            <Col>
              <center className="mb-4" id="awal">
                I am a hardworking individual who is always enthusiastic about
                taking on new challenges. I possess the ability to work
                diligently and not afraid to take initiative. I am also highly
                sociable and have excellent communication skills, allowing me to
                easily adapt to a team environment. I have a neat and organized
                approach to my tasks and always strive to deliver the best
                results. I believe that a positive attitude and a willingness to
                learn are the keys to success in achieving goals.
              </center>
              <center>
                <img class="framed2" src={foto2} width={"40%"} alt="david" />
              </center>
            </Col>
            <Col>
              <center className="mb-4">
                One of my favorite pastimes is visiting the charming cafes in
                Bandung. I thoroughly enjoy the experience of sitting in cozy,
                welcoming coffee houses and exploring their diverse menus. What
                I particularly savor is trying out their 'Long Black' coffee.
                It's not just a drink; it's an art form, and I relish every sip
                as I savor the rich, bold flavors of this classic espresso-based
                beverage. Exploring the coffee culture in Bandung has become a
                delightful and cherished hobby of mine.
              </center>
              <Carousel fade>
                <Carousel.Item interval={2000}>
                  <center>
                    <img
                      src={kopi1}
                      class="framed2"
                      width={"230px"}
                      height={"320px"}
                    />
                  </center>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <center>
                    <img
                      src={kopi2}
                      class="framed2"
                      width={"230px"}
                      height={"320px"}
                    />
                  </center>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <center>
                    <img
                      src={kopi3}
                      class="framed2"
                      width={"230px"}
                      height={"320px"}
                    />
                  </center>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                  <center>
                    <img
                      src={kopi4}
                      class="framed2"
                      width={"230px"}
                      height={"320px"}
                    />
                  </center>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Baris 3 */}
      <div
        style={{ backgroundColor: "#2E4374", color: "whitesmoke" }}
        className="pb-3"
      >
        <Container>
          <Row>
            <center>
              <h2 className="mt-2">My programming languages:</h2>
              <Carousel className="mt-2">
                <Carousel.Item interval={2000}>
                  <Row
                    className="justify-content-md-center mb-4"
                    style={{ fontSize: "100px" }}
                  >
                    <Col md="2">
                      <FaJava />
                      <p style={{ fontSize: "20px" }}>Java</p>
                    </Col>
                    <Col md="2">
                      <FaJs />
                      <p style={{ fontSize: "20px" }}>JavaScript</p>
                    </Col>

                    <Col md="2">
                      <FaHtml5 />
                      <p style={{ fontSize: "20px" }}>Html</p>
                    </Col>

                    <Col md="2">
                      <FaCss3Alt />
                      <p style={{ fontSize: "20px" }}>Css</p>
                    </Col>

                    <Col md="2">
                      <FaPython />
                      <p style={{ fontSize: "20px" }}>Python</p>
                    </Col>
                  </Row>
                </Carousel.Item>

                <Carousel.Item interval={2000}>
                  <Row
                    className="justify-content-md-center mb-4"
                    style={{ fontSize: "100px" }}
                  >
                    <Col md="2">
                      <BiLogoFlutter />
                      <p style={{ fontSize: "20px" }}>Dart</p>
                    </Col>
                    <Col md="2">
                      <SiKotlin />
                      <p style={{ fontSize: "20px" }}>Kotlin</p>
                    </Col>

                    <Col md="2">
                      <SiCsharp />
                      <p style={{ fontSize: "20px" }}>C#</p>
                    </Col>

                    <Col md="2">
                      <SiMysql />
                      <p style={{ fontSize: "20px" }}>SQL</p>
                    </Col>

                    <Col md="2">
                      <DiMongodb />
                      <p style={{ fontSize: "20px" }}>NoSQL</p>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </center>
          </Row>
        </Container>
      </div>
      {/* 
      Baris 4
      <div style={{ backgroundColor: "#E5C3A6" }} className="pb-4">
        <Container>
          <Row>
            <center>
              <h2>Greetings from me</h2>
              <ReactPlayer url={perkenalan} controls={true} />
            </center>
          </Row>
        </Container>
      </div> */}
      <Footer />
    </div>
  );
};

export default HomePage;
