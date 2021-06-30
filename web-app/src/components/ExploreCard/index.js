import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";

export default function ExploreCard(props) {
  return (
    <div>
      <Card style={{ width: "100%", marginTop: "30px" }}>
        <Row>
          <Col>
            <div className="cardImageContainer">
              <Card.Img variant="top" src={props.pic} />
            </div>
          </Col>
          <Col>
            <Card.Body style={{ textAlign: "left" }}>
              <Card.Title>{props.name}</Card.Title>
              <Card.Title className="job">{props.job}</Card.Title>
              <Card.Title className="about">
                <Row>
                  <Col>About Me</Col>
                  <Col>
                    <i className="fa fa-map-marker"></i>
                    &nbsp; {props.location}
                  </Col>
                </Row>
              </Card.Title>
              <Card.Text style={{ marginTop: "30px" }}>
                {props.about1}
              </Card.Text>
              <Card.Text style={{ marginTop: "30px" }}>
                {props.about2}
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
    </div>
  );
}
