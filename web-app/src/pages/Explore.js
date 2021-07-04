import React, { Component } from 'react';
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
import Chips from "../components/chips/Chips"
import "./style.css";
import constants from "../constants/constants";
import Axios from "axios";

const lan = ["English", "Hindi", "Spanish",];
const cat = ["Cooking", "Infotainment", "Travel",];

class Explore extends Component {
  constructor() {
    super();
    this.state = {
      values: [],
    };
    this.getRecomendedList = this.getRecomendedList.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem("auth-token") !== "") {
      this.getRecomendedList();
    } else {
      this.props.history.push("/");
    }
  }


  async getRecomendedList() {
    var id = localStorage.getItem("auth-id");
    try {
      Axios.get(constants.backend_url + "/users/recommend/" + id)
        .then(res => {
          console.log("her: " + res.data)
          this.setState({
            values: res.data
          })
        })
    } catch (err) {
      console.log(err)
    }
  }
  render() {
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

                  {
                    this.state.values.length != 0 ? (
                      this.state.values &&
                      this.state.values.map((item) => {
                        return (
                          <div class="container-lg  shadow p-3 mb-5  text-dark">

                            <ExploreCard
                              name={item.userName}
                              channel={item.socialName}
                              about1={item.about}
                              pic={item.photo}
                              category={item.category}
                              language={item.language}
                              youtube={item.youtube}
                              twitter={item.twitter}
                              instagram={item.insta}
                              tiktok={item.tiktok}
                            ></ExploreCard>
                          </div>
                        )
                      })

                    ) : (
                      <div style={{marginTop:"20%"}}>
                        <h3>
                          Sorry, we could not find a match for your selected category and language. Please change it in your profile and try again.
                        </h3>
                      </div>
                    )
                  }
                </Carousel>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Explore;