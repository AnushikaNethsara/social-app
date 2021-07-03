import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import AllLanguages from "../constants/languages";
import AllCategories from "../constants/categories"
//import "./up.scss";


class Profile extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  constructor() {
    super();
    this.state = {
      values: [],
      
    };
   
  }
  componentDidMount() {
    if (localStorage.getItem("auth-token") !== "") {
    }else{
      
    }
  }
  render() {
    return (
      <div>
        <div
          class="container-lg  shadow p-3 mb-5  text-dark p-5"
          style={{ marginTop: "5%",marginBottom:"5000%" }}
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
                      <div>
                        <button
                          type="submit"
                          className="btn btn-dark ml-150 px-5 w-100 mt-5"
                          value="Log in"
                        >
                          Save
                        </button>
                      </div>
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
        <div style={{marginTop:"15%"}}>
           <p className="text-light">h</p>
        </div>
      </div>
    );
  }
}

export default Profile;
