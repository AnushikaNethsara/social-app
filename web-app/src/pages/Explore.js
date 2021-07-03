import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ExploreCard from "../components/ExploreCard";
import ReactCardCarousel from "react-card-carousel";
import chef3 from "../images/chef3.jpg";
import chef1 from "../images/chef1.jpg";
import chef2 from "../images/chef2.jpg";
import yo1 from "../images/yo1.jpg";
import yo2 from "../images/yo2.jpg";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

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
              <Carousel
                additionalTransfrom={0}
                arrows
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024,
                    },
                    items: 1,
                    partialVisibilityGutter: 40,
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                  },
                }}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >
                <div class="container-lg  shadow p-3 mb-5  text-dark">
                  <ExploreCard
                    name="John Doe"
                    channel="Chef"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef3}
                    category={["Gaming", "Vlog", "Podcast"]}
                    language={["English", "German"]}
                    youtube="http://www.youtube.com"
                    twitter="http://www.twitter.com"
                    instagram="http://www.instagram.com"
                    tiktok="http://www.tiktok.com"
                  ></ExploreCard>
                </div>
                <div class="container-lg  shadow p-3 mb-5  text-dark">
                  <ExploreCard
                    name="Chan Dan"
                    channel="Chef"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef1}
                    category={["Gaming", "Vlog", "Podcast"]}
                    language={["English", "German"]}
                    youtube="http://www.youtube.com"
                    twitter="http://www.twitter.com"
                    instagram="http://www.instagram.com"
                    tiktok="http://www.tiktok.com"
                  ></ExploreCard>
                </div>
                <div class="container-lg  shadow p-3 mb-5  text-dark">
                  <ExploreCard
                    name="Joe Call"
                    channel="Chef"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={chef2}
                    category={["Gaming", "Vlog", "Podcast"]}
                    language={["English", "German"]}
                    youtube="http://www.youtube.com"
                    twitter="http://www.twitter.com"
                    instagram="http://www.instagram.com"
                    tiktok="http://www.tiktok.com"
                  ></ExploreCard>
                </div>
                <div class="container-lg  shadow p-3 mb-5  text-dark">
                  <ExploreCard
                    name="Zoy Han"
                    channel="Chef"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={yo1}
                    category={["Gaming", "Vlog", "Podcast"]}
                    language={["English", "German"]}
                    youtube="http://www.youtube.com"
                    twitter="http://www.twitter.com"
                    instagram="http://www.instagram.com"
                    tiktok="http://www.tiktok.com"
                  ></ExploreCard>
                </div>
                <div class="container-lg  shadow p-3 mb-5  text-dark">
                  <ExploreCard
                    name="Dove Wills"
                    channel="Chef"
                    about1="Some quick example text to build on the card title and make up the bulk of the card's content."
                    about2="Some quick example text to build on the card title and make up the bulk of the card's content."
                    pic={yo2}
                    category={["Gaming", "Vlog", "Podcast"]}
                    language={["English", "German"]}
                    youtube="http://www.youtube.com"
                    twitter="http://www.twitter.com"
                    instagram="http://www.instagram.com"
                    tiktok="http://www.tiktok.com"
                  ></ExploreCard>
                </div>
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
