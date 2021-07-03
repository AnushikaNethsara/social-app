import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";
import Chips from "../chips/Chips"

const lan = ["English", "Hindi", "Spanish",];
const cat = ["Cooking", "Infotainment", "Travel",];


export default function ExploreCard(props) {
  return (
    <div>
      <Card style={{ width: "80%", marginTop: "30px",padding:"5%"}}>
        <Row>
          <Col sm={5}>
            <Row>
              <div className="cardImageContainer">
                <Card.Img variant="top" src={props.pic} />
              </div>
            </Row>
            <Row>
              <Card.Text style={{ marginTop: "30px" }}>
                <p>Content Category:</p>
                <div style={{ display: "flex" }}>
                  {props.category.map((cat) => (
                    <Chips title={cat}/>
                  ))}
                </div>
              </Card.Text>
              <Card.Text style={{ marginTop: "30px" }}>
                <p>Language:</p>
                <div style={{ display: "flex" }}>
                  {props.language.map((lan) => (
                    <Chips title={lan} />
                  ))}
                </div>
              </Card.Text>
            </Row>
          </Col>
          <Col sm={7}>
            <Card.Body style={{ textAlign: "left",marginBottom: "5%"  }}>
              <Card.Title>
                <span className="job"> Name:</span>
                <br></br> {props.name}
              </Card.Title>
              <Card.Title>
                <span className="job">
                  Youtube Channel Name / Social Handle Username:
                </span>
                <br></br> {props.channel}
              </Card.Title>
              <Card.Title className="job">About Me</Card.Title>
              <Card.Text style={{ marginTop: "30px" }}>
                {props.about1}
              </Card.Text>
              <Card.Text style={{ marginTop: "30px" }}>
                {props.about2}
              </Card.Text>

              <div style={{ paddingTop: "100px" }}>
                <Row>
                  <Card.Title>Socials:</Card.Title>
                  <Col>
                    <a className="icon" href={`${props.youtube}`}>
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={`${props.instagram}`}>
                      <i className="fa fa-instagram"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={`${props.twitter}`}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={`${props.tiktok}`}>
                      <i className="fa fa-tumblr"></i>
                    </a>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
