import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Button, Row, Col, Image, Form } from "react-bootstrap";
import chef3 from "../images/chef3.jpg";

class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (localStorage.getItem("auth-token") != "") {
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
                  <Image src={chef3} thumbnail ></Image>
                  <Form>
                    <Form.Group>
                      <Form.File
                        id="exampleFormControlFile1"
                        label="Upload Profile Picture"
                      />
                    </Form.Group>
                  </Form>
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
