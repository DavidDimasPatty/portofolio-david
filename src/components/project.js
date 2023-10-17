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
} from "react-bootstrap";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Tobacco from "../assets/tobacco.png";
import Imam from "../assets/imam.png";
import hpa from "../assets/homepageAdmin.png";
import hpi from "../assets/homepageImam.png";
import hpu from "../assets/homepagePI.png";
import "../assets/project.css";

const Project = () => {
  const [arrProject, setArrProject] = useState([]);
  const [arrProjectTemp, setArrProjectTemp] = useState([]);

  useEffect(() => {
    var arrTemp = [];
    arrTemp.push({
      name: "Tobacco Website",
      image: Tobacco,
      category: "website",
      url: "https://tobacco.vercel.app/",
      description: "",
    });
    arrTemp.push({
      name: "Admin Dashboard",
      image: Imam,
      category: "website",
      url: "https://admin-pelayanan-iman-katolik.vercel.app/",
      description: "",
    });
    arrTemp.push({
      name: "Pelayanan Imam Katolik",
      image: hpu,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description: "",
    });
    arrTemp.push({
      name: "Imam Pelayanan Katolik",
      image: hpi,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description: "",
    });
    arrTemp.push({
      name: "Admin Pelayanan Katolik",
      image: hpa,
      category: "mobile",
      url:
        "https://drive.google.com/drive/u/0/folders/1EYfF7u3YNRutKp0J1_pIfxE9SqRPBGaa",
      description: "",
    });
    setArrProject(arrTemp);
    setArrProjectTemp(arrTemp);
  }, []);

  function find(name){
    setArrProject(arrProjectTemp);
    var arrTemp=[];
    for(var i=0;i<arrProjectTemp.length;i++){
        if(arrProjectTemp[i].name.toLowerCase().includes(name.toLowerCase())){
            arrTemp.push(arrProjectTemp[i])
        }
    }
    setArrProject(arrTemp);
  }

  return (
    <div className="bg2">
      <Header />

      {/* Baris 1 */}
      <div className="pb-3">
        <Container>
          <Row className="mt-5">
            <center>
              <h3 style={{color:"white"}}>Find My Project</h3>
              <InputGroup className="mb-3 cover1" onChange={(e)=>find(e.target.value)}>
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
                  style={{ width: "fit-content", display: "block" }}
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
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <center>
                      {(() => {
                        if (data.category == "mobile") {
                          return (
                            <button
                              class="button-50"
                              role="button"
                              href={data.url}
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
                              href={data.url}
                            >
                              Visit
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
