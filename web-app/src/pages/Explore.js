import React, { Component } from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import chef3 from "../images/chef3.jpg";
import "./style.css";

class Explore extends Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <div className="text-center">
            <h3>Explore</h3>
          </div>
          <div>
            <Row className="row align-items-center text-center">
              <Col sm={2}>
                <Button className="tg-btn">
                  <i className="fa fa-caret-square-o-left"></i>
                </Button>
              </Col>
              <Col>
                <Card style={{ width: "100%", marginTop: "2%" }}>
                  <Row>
                    <Col>
                      <Card.Img variant="top" src={chef3} />
                    </Col>
                    <Col>
                      <Card.Body style={{ textAlign: "left" }}>
                        <Card.Title>John Doe</Card.Title>
                        <Card.Title className="job">Chef</Card.Title>
                        <Card.Title className="about">
                          <Row>
                            <Col>About Me</Col>
                            <Col>
                              <i className="fa fa-map-marker"></i>
                              &nbsp; Chicago, USA
                            </Col>
                          </Row>
                        </Card.Title>
                        <Card.Text style={{ marginTop: "30px" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Card.Text style={{ marginTop: "30px" }}>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary" className="w-100">
                          Go somewhere
                        </Button>
                        <br></br>
                        <br></br>
                        <div className="text-center">
                          <Button className="share">
                            Share this profile &nbsp;{" "}
                            <i className="fa fa-mail-forward"></i>
                          </Button>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col sm={2}>
                <Button className="tg-btn">
                  <i className="fa fa-caret-square-o-right"></i>
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Explore;
