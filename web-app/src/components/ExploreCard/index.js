import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./style.css";
import Chips from "../chips/Chips"
import g from "../../images/user.png"

const lan = ["English", "Hindi", "Spanish",];
const cat = ["Cooking", "Infotainment", "Travel",];


export default function ExploreCard(props) {
  const [picture, setPicture] = useState("");
  useEffect(() => {
    console.log("pic: " + props.pic)
    if (props.pic === undefined) {
      setPicture(g)
    } else {
      setPicture(props.pic)
    }
  }, [])
  return (
    <div>
      <Card style={{ width: "80%", marginTop: "30px", padding: "5%" }}>
        <Row>
          <Col sm={5}>
            <Row>
              <div className="cardImageContainer">
                <Card.Img variant="top" src={picture} width="300px" height="300px" />
              </div>
            </Row>
            <Row>
              <Card.Text style={{ marginTop: "30px" }}>
                <p>Content Category:</p>
                <div style={{ display: "flex" }}>
                  {props.category.map((cat) => (
                    <Chips title={cat} />
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
            <Card.Body style={{ textAlign: "left", marginBottom: "5%" }}>
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
                    <a className="icon" href={props.youtube} target="_blank" >
                      <i className="fa fa-youtube-play"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={props.instagram} target="_blank" >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={props.twitter} target="_blank" >
                      <i className="fa fa-twitter"></i>
                    </a>
                  </Col>
                  <Col>
                    <a className="icon" href={props.tiktok} target="_blank" >
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
