import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "./style.css";
//import "./up.scss";

const AllCategories = [
  "Gaming",
  "Vlog",
  "Podcast",
  "Music",
  "Parody/Comedy",
  "Make-up &amp; Beauty",
  "Reviews &amp; Unboxing",
  "Health &amp; Fitness",
  "Prank/Challenges",
  "Tutorials",
  "How-to &amp; DIY",
  "Educational",
  "Commentary",
  "Sports",
  "Compilations",
  "News/Journalism",
  "Lifestyle",
  "Cooking",
  "Infotainment",
  "Travel",
];

const AllLanguages = [
  "English",
  "Hindi",
  "Spanish",
  "Arabic",
  "Bengali",
  "French",
  "Russian",
  "Portuguese",
  "Urdu",
  "Indonesian",
  "German",
  "Marathi",
  "Telugu",
  "Punjabi",
  "Tamil",
];

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
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        style={{ marginBottom: "30px", height: "65px" }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Youtube Channel Name / Social Handle Username
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name  Youtube Channel Name / Social Handle Username"
                        style={{ marginBottom: "30px", height: "65px" }}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Content Category (Select Upto 3)</Form.Label>
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={AllCategories}
                        getOptionLabel={(option) => option}
                        //value={masterQualifications}
                        //onChange={onChangeCategories}
                        filterSelectedOptions
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Language (Pick Upto 2 Primary Languages You Talk)"
                            style={{ marginBottom: "30px", height: "65px" }}
                          />
                        )}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>
                        Language (Pick Upto 2 Primary Languages You Talk)
                      </Form.Label>
                      <Autocomplete
                        multiple
                        id="tags-outlined"
                        options={AllLanguages}
                        getOptionLabel={(option) => option}
                        //value={masterQualifications}
                        //onChange={onChangeQualification}
                        filterSelectedOptions
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            placeholder="Language (Pick Upto 2 Primary Languages You Talk)"
                            style={{ marginBottom: "30px", height: "65px" }}
                          />
                        )}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>About Me (Write A Short Bio)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        style={{ marginBottom: "30px" }}
                      />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Socials</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="YouTube"
                        style={{ height: "65px" }}
                      />
                      <br></br>
                      <Form.Control
                        type="text"
                        placeholder="Instagram"
                        style={{ height: "65px" }}
                      />
                      <br></br>
                      <Form.Control
                        type="text"
                        placeholder="TikTok"
                        style={{ height: "65px" }}
                      />
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
