import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import chef3 from "../images/chef3.jpg";
import "./style.css";
import "./up.scss";

class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (localStorage.getItem("auth-token") !== "") {
    }
  }
  render() {
    return (
      <div
        class="container-lg  shadow p-3 mb-5  text-dark"
        style={{ marginTop: "5%" }}
      >
        <div>
          <Container>
            <div className="text-center">
              <h3>Profile</h3>
            </div>
            <div>
              <Row>
                <Col sm={8}>
                  <Form>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Youtube Channel Name / Social Handle Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name  Youtube Channel Name / Social Handle Username"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Content Category (Select Upto 3)</Form.Label>
                      <Form.Control as="select">
                        <option>Gaming</option>
                        <option>Vlog</option>
                        <option>Podcast</option>
                        <option>Music</option>
                        <option>Parody/Comedy</option>
                        <option>Make-up &amp; Beauty</option>
                        <option>Reviews &amp; Unboxing</option>
                        <option>Health &amp; Fitness</option>
                        <option>Prank/Challenges</option>
                        <option>Tutorials</option>
                        <option>How-to &amp; DIY</option>
                        <option>Educational</option>
                        <option>Commentary</option>
                        <option>Sports</option>
                        <option>Compilations</option>
                        <option>News/Journalism</option>
                        <option>Lifestyle</option>
                        <option>Cooking</option>
                        <option>Infotainment</option>
                        <option>Travel</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Language (Pick Upto 2 Primary Languages You Talk)
                      </Form.Label>
                      <Form.Control as="select">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Spanish</option>
                        <option>Arabic</option>
                        <option>Bengali</option>
                        <option>French</option>
                        <option>Russian</option>
                        <option>Portuguese</option>
                        <option>Urdu</option>
                        <option>Indonesian</option>
                        <option>German</option>
                        <option>Marathi</option>
                        <option>Telugu</option>
                        <option>Punjabi</option>
                        <option>Tamil</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>About Me (Write A Short Bio)</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Socials</Form.Label>
                      <Form.Control type="text" placeholder="YouTube" />
                      <br></br>
                      <Form.Control type="text" placeholder="Instagram" />
                      <br></br>
                      <Form.Control type="text" placeholder="TikTok" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col sm={4}>
                  <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                    <Form style={{ marginTop: "20px" }}>
                      <Form.Group>
                        <div className="wrapper">
                          <div className="file-upload">
                            <Row
                              className="row align-items-center"
                              style={{ height: "200px" }}
                            >
                              <Col>
                                <div className="text-center">
                                  <input type="file" />
                                  <i className="fa fa-plus" />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>
                                <div className="text-center">
                                  <p
                                    style={{
                                      fontSize: "15px",
                                      fontWeight: "900",
                                    }}
                                  >
                                    Click Here To Upload Image
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default Profile;
