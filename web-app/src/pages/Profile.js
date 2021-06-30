import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import chef3 from "../images/chef3.jpg";
import "./style.css";

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
                      <Form.Label>Youtube Channel Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name Youtube Channel Name"
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>About Me (Bio)</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Content Category</Form.Label>
                      <Form.Control type="text" placeholder="Select Upto 3" />
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
                    <div className="imageContainer">
                      <Image
                        src={chef3}
                        roundedCircle
                        style={{ width: "100%" }}
                      ></Image>
                    </div>
                    <Form style={{ marginTop: "20px" }}>
                      <Form.Group>
                        <div className="mb-3">
                          <label htmlFor="formFile" className="form-label">
                            Upload Profile Picture
                          </label>
                          <input
                            className="form-control"
                            type="file"
                            id="formFile"
                          />
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
