import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Carousel,
  Form,
  InputGroup,
  Card,
  Badge,
} from "react-bootstrap";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Tobacco from "../assets/tobacco.png";
import Imam from "../assets/imam.png";
import hpa from "../assets/homepageAdmin.png";
import hpi from "../assets/homepageImam.png";
import hpu from "../assets/homepagePI.png";
import mnistdata from "../assets/mnistdata.png";
import kahoot from "../assets/kahoot.png";
import sqlonly from "../assets/sqlonly.png";
import "../assets/project.css";

const Project = () => {
  const [arrProject, setArrProject] = useState([]);
  const [load, setLoad] = useState([]);
  const [arrProjectTemp, setArrProjectTemp] = useState(true);

  useEffect(() => {
    var arrTemp = [];
    arrTemp.push({
      name: "Tobacco Website",
      image: Tobacco,
      category: "website",
      url: "https://tobacco.vercel.app/",
      description: "Tobacco market place. Provide buying products for users",
      lang: ["JavaScript", "React", "Mongo DB"],
    });
    arrTemp.push({
      name: "Admin Dashboard",
      image: Imam,
      category: "website",
      url: "https://admin-pelayanan-iman-katolik.vercel.app/",
      description:
        "Dashboard for admin. Use username admin and password admin to login",
      lang: ["JavaScript", "React", "Mongo DB"],
    });
    arrTemp.push({
      name: "Pelayanan Imam Katolik",
      image: hpu,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description: "Mobile Application for Catholic Services. Used for helping user enroll catholic services.",
      lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
    });
    arrTemp.push({
      name: "Imam Pelayanan Katolik",
      image: hpi,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description:
        "Mobile Application for handling Catholic Services. Used only by priests.",
      lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
    });
    arrTemp.push({
      name: "Admin Pelayanan Katolik",
      image: hpa,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description: "Mobile Application for handling accounts. Used only by admin.",
      lang: ["Flutter", "Dart", "Mongo DB", "Fire Base"],
    });
    arrTemp.push({
      name: "MNIST Data Deep Learning",
      image: mnistdata,
      category: "website",
      url:
        "https://github.com/DavidDimasPatty/MNIST_Recognition_NeuralNetwork/blob/master/6181801040.ipynb",
      description: "Deep learning approach for recognize handwriting using MNIST Data. Accuration reach up to 95%.",
      lang: ["Python"],
    });
    arrTemp.push({
      name: "Socket Dekstop Kahoot Python",
      image: kahoot,
      category: "dekstop",
      url: "https://github.com/DavidDimasPatty/python-kahoot",
      description: "Socket programming approach using Python for interaction beetwen server and client in dekstop",
      lang: ["Python"],
    });
    arrTemp.push({
      name: "SQL Only (Hamper store)",
      image: sqlonly,
      category: "website",
      url: "https://github.com/DavidDimasPatty/Hampers-Online-SQL-ONLY-",
      description: "Store procedures for establishing hamper store. Including sells, buys, and organize products.",
      lang: ["SQL"],
    });
    setArrProject(arrTemp);
    setArrProjectTemp(arrTemp);
    setLoad(false);
  }, []);

  function find(name) {
    setArrProject(arrProjectTemp);
    var arrTemp = [];
    for (var i = 0; i < arrProjectTemp.length; i++) {
      if (arrProjectTemp[i].name.toLowerCase().includes(name.toLowerCase())) {
        arrTemp.push(arrProjectTemp[i]);
      }
    }
    setArrProject(arrTemp);
  }

  if (load) {
    return <div class="custom-loader"></div>;
  }

  return (
    <div className="bg2">
      <Header />

      {/* Baris 1 */}
      <div className="pb-3">
        <Container>
          <Row className="mt-5">
            <center>
              <h3 style={{ color: "white" }}>Find My Project</h3>
              <InputGroup
                className="mb-3 cover1"
                onChange={(e) => find(e.target.value)}
              >
                <Form.Control
                  placeholder="Find My Projects"
                  aria-label="Find My Projects"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </center>
          </Row>
        </Container>
      </div>

      {/* Baris 2 */}
      <div className="pb-5">
        <Container>
          <Row className="d-flex">
            {arrProject.map((data, index) => (
              <Col xs={4} className="mt-5">
                <Card
                  style={{ width: "90%", height: "100%"}}
                  className="me-5 cardbg"
                >
                  <center>
                    <Card.Img
                      variant="top"
                      src={data.image}
                      style={{
                        maxHeight: "150px",
                        maxWidth: "fit-content",
                        minWidth: "fit-content",
                      }}
                      className="mt-2 mb-2"
                    />
                  </center>
                  <Card.Body className="cardbody mt-2">
                    <Card.Title>{data.name}</Card.Title>
                    {(() => {
                      var arr = [];
                      for (var i = 0; i < data.lang.length; i++) {
                        if (data.lang[i] == "JavaScript") {
                          arr.push(
                            <Badge pill bg="primary" className="me-2">
                              JavaScript
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "React") {
                          arr.push(
                            <Badge pill bg="secondary" className="me-2">
                              React
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "Mongo DB") {
                          arr.push(
                            <Badge pill bg="success" className="me-2">
                              Mongo DB
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "Fire Base") {
                          arr.push(
                            <Badge pill bg="danger" className="me-2">
                              Fire Base
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "Flutter") {
                          arr.push(
                            <Badge pill bg="warning" text="dark" className="me-2">
                              Flutter
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "Dart") {
                          arr.push(
                            <Badge pill bg="info" className="me-2">
                              Dart
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "SQL") {
                          arr.push(
                            <Badge pill bg="info" className="me-2">
                              SQL
                            </Badge>
                          );
                        }
                        if (data.lang[i] == "Python") {
                          arr.push(
                            <Badge pill bg="dark" className="me-2">
                              Python
                            </Badge>
                          );
                        }
                      }
                      return arr;
                    })()}
                    <Card.Text>{data.description}</Card.Text>
                    <center>
                      {(() => {
                        if (data.category == "mobile") {
                          return (
                            <button
                              class="button-50"
                              role="button"
                              onClick={() => {
                                window.open(data.url);
                              }}
                            >
                              Download
                            </button>
                          );
                        }
                        if (data.category == "website") {
                          return (
                            <button
                              class="button-50"
                              role="button"
                              onClick={() => {
                                window.open(data.url);
                              }}
                            >
                              Visit
                            </button>
                          );
                        }
                        if (data.category == "dekstop") {
                          return (
                            <button
                              class="button-50"
                              role="button"
                              onClick={() => {
                                window.open(data.url);
                              }}
                            >
                              Clone Git
                            </button>
                          );
                        }
                      })()}
                    </center>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
