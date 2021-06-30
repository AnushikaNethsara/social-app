import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExploreCard from "../components/ExploreCard";
import ReactCardCarousel from "react-card-carousel";
import chef3 from "../images/chef3.jpg";
import chef1 from "../images/chef1.jpg";
import chef2 from "../images/chef2.jpg";
import yo1 from "../images/yo1.jpg";
import yo2 from "../images/yo2.jpg";

import "./style.css";

export default function Explore() {
  return (
    <div>
      <Container>
        <div className="text-center">
          <h3>Explore</h3>
        </div>
        <div>
          <Row className="row align-items-center text-center">
            <Col>
              <ReactCardCarousel>
                <div>
                  <ExploreCard
                    name="John Doe"
                    job="Chef"
                    location="Chicago, USA"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef3}
                  ></ExploreCard>
                </div>
                <div>
                  <ExploreCard
                    name="Chan Dan"
                    job="Chef"
                    location="Chicago, USA"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef1}
                  ></ExploreCard>
                </div>
                <div>
                  <ExploreCard
                    name="Joe Call"
                    job="Chef"
                    location="Chicago, USA"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef2}
                  ></ExploreCard>
                </div>
                <div>
                  <ExploreCard
                    name="Zoy Han"
                    job="Chef"
                    location="Chicago, USA"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={yo1}
                  ></ExploreCard>
                </div>
                <div>
                  <ExploreCard
                    name="Dove Wills"
                    job="Chef"
                    location="Chicago, USA"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={yo2}
                  ></ExploreCard>
                </div>
              </ReactCardCarousel>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
