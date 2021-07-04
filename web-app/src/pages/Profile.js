import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, Form } from "react-bootstrap";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import "./style.css";
import AllLanguages from "../constants/languages";
import AllCategories from "../constants/categories";
import constants from "../constants/constants";
import Axios from "axios";
import image1 from "../images/im2.jpg";
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
      userId: '',
      email: '',
      password: '',
      userName: '',
      socialName: "",
      language: [],
      about: '',
      category: [],
      youtube: '',
      insta: '',
      tiktok: '',
      twitter: '',
      profilePic: null,
      error: "",
      imgPreview: null,
      imageError: false,
      imageChanged: "no"
    };
    this.getProfileDetails = this.getProfileDetails.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.hadleUpload = this.hadleUpload.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);

  }
  handleImageChange(e) {
    this.setState({
      imageError: false
    })
    const selected = e.target.files[0];
    const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/jpg"];
    if (selected && ALLOWED_TYPES.includes(selected.type)) {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          imgPreview: reader.result
        })
      };
      reader.readAsDataURL(selected);
    } else {
      this.setState({
        imageError: true
      })
    }
  };

  handleRemove(e) {
    e.preventDefault();
    try {
      var id = localStorage.getItem("auth-id");
      const res = Axios.delete(
        constants.backend_url + "/users/remove-photo/" + id
      ).then((res) => { console.log(res.data); this.setState({ error: "Successfully Updated!" }) });
    } catch (err) {
      console.log(err)
      this.setState({ error: "Error" + err })
    }
  }



  componentDidMount() {

    if (localStorage.getItem("auth-token") !== "") {
      this.getProfileDetails();
    } else {
      this.props.history.push("/");
    }
  }
  hadleUpload(e) {
    this.setState({
      profilePic: e.target.files[0],
      imageChanged: "yes",
      error: ''
    });
  }

  async getProfileDetails() {
    var id = localStorage.getItem("auth-id");
    this.setState({
      userId: id,
    });

    try {
      Axios.get(constants.backend_url + "/users/" + id)
        .then(res => {
          res.data.forEach((item) => {
            this.setState({
              userName: item.userName,
              socialName: item.socialName,
              about: item.about,
              category: item.category,
              language: item.language,
              youtube: item.youtube,
              insta: item.insta,
              tiktok: item.tiktok,
              twitter: item.twitter,
              profilePic: item.photo,
              imgPreview: item.photo,
            })
          })
        })
    } catch (err) {
      console.log(err)
    }
  }

  onHandleSubmit(e) {
    e.preventDefault();
    var id = localStorage.getItem("auth-id");
    console.log("jjj: " + this.state.profilePic)
    const formData = new FormData();
    formData.append("userName", this.state.userName);
    formData.append("socialName", this.state.socialName);
    formData.append("about", this.state.about);
    formData.append("youtube", this.state.youtube);
    formData.append("insta", this.state.insta);
    formData.append("tiktok", this.state.tiktok);
    formData.append("twitter", this.state.twitter);
    this.state.category.forEach((element) => {
      formData.append("category[]", element);
    });
    this.state.language.forEach((element) => {
      formData.append("language[]", element);
    });
    formData.append("photo", this.state.profilePic);
    formData.append("changed", this.state.imageChanged);

    try {
      const signUpRes = Axios.put(
        constants.backend_url + "/users/" + id,
        formData,
      ).then((res) => { console.log(res.data); this.setState({ error: "Successfully Updated!" }) });
    } catch (err) {
      console.log(err)
      this.setState({ error: "Error" + err })
    }


  }


  render() {
    return (
      <div>
        <div
          class="container-lg  shadow p-3 mb-5  text-dark p-5"
          style={{ marginTop: "5%", marginBottom: "5000%" }}
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
                          value={this.state.userName}
                          onChange={(e) => this.setState({ userName: e.target.value, error: "" })}
                          placeholder="Enter Name"
                          style={{ marginBottom: "30px", height: "65px" }}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>
                          Youtube Channel Name / Social Handle Username
                        </Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) => this.setState({ socialName: e.target.value, error: "" })}
                          value={this.state.socialName}
                          placeholder="Enter Name  Youtube Channel Name / Social Handle Username"
                          style={{ marginBottom: "30px", height: "65px" }}
                          required
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Content Category (Select Upto 3)</Form.Label>
                        <Autocomplete
                          required
                          multiple
                          id="tags-outlined"
                          options={AllCategories}
                          getOptionLabel={(option) => option}
                          value={this.state.category}
                          onChange={(event, newValue) => {
                            this.setState({
                              category: [...newValue]
                              , error: ""
                            });
                          }}
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
                          required
                          multiple
                          id="tags-outlined"
                          options={AllLanguages}
                          getOptionLabel={(option) => option}
                          value={this.state.language}
                          onChange={(event, newValue) => {
                            this.setState({
                              language: [...newValue],
                              error: ""
                            });
                          }}
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
                          required
                          as="textarea"
                          value={this.state.about}
                          onChange={(e) => this.setState({ about: e.target.value, error: "" })}
                          rows={4}
                          style={{ marginBottom: "30px" }}
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Label>Socials</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="YouTube"
                          onChange={(e) => this.setState({ youtube: e.target.value, error: "" })}
                          value={this.state.youtube}
                          style={{ height: "65px" }}
                        />
                        <br></br>
                        <Form.Control
                          type="text"
                          placeholder="Instagram"
                          onChange={(e) => this.setState({ insta: e.target.value, error: "" })}
                          value={this.state.insta}
                          style={{ height: "65px" }}
                        />
                        <br></br>
                        <Form.Control
                          type="text"
                          placeholder="TikTok"
                          onChange={(e) => this.setState({ tiktok: e.target.value, error: "" })}
                          value={this.state.tiktok}
                          style={{ height: "65px" }}
                        />
                        <br></br>
                        <Form.Control
                          type="text"
                          placeholder="Twitter"
                          onChange={(e) => this.setState({ twitter: e.target.value, error: "" })}
                          value={this.state.twitter}
                          style={{ height: "65px" }}
                        />
                      </Form.Group>
                      <div>

                        <button
                          className="btn btn-dark ml-150 px-5 w-100 mt-5"
                          value="Log in"
                          onClick={(e) => this.onHandleSubmit(e)}
                        >
                          Update
                        </button>
                        <p className="text-danger text-center mt-3">{this.state.error}</p>
                      </div>

                    </Form>
                  </Col>
                  <Col sm={4}>
                    <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                      <Form style={{ marginTop: "20px" }}>
                        <Form.Group>
                          {/* <img src={this.state.profilePic} alt="vvfvf" style={{ height: "250px", width: "250px" }} /> */}
                          <div className="wrapper">
                            <div className="file-upload">
                              <div className="App">
                                <div className="container1">
                                  {this.state.imageError && <p className="errorMsg">File not supported</p>}
                                  <div
                                    className="imgPreview"
                                    style={{
                                      background: this.state.imgPreview
                                        ? `url("${this.state.imgPreview}") no-repeat center/cover`
                                        : "#131313"
                                    }}
                                  >
                                    {!this.state.imgPreview && (
                                      <>
                                        <p>Add an image</p>
                                        <label htmlFor="fileUpload" className="customFileUpload">
                                          <i className="fa fa-plus" />
                                        </label>

                                        <input type="file" id="fileUpload" onChange={(e) => {
                                          this.handleImageChange(e);
                                          this.hadleUpload(e);
                                        }} />
                                        <span>(jpg, jpeg or png)</span>
                                      </>
                                    )}
                                  </div>
                                  {this.state.imgPreview && (
                                    <button className="button1" onClick={(e) => { this.setState({ imgPreview: null }); this.handleRemove(e) }}>Remove Photo</button>
                                  )}
                                </div>
                              </div>
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
        <div style={{ marginTop: "15%" }}>
          <p className="text-light">h</p>
        </div>
      </div>
    );
  }
}

export default Profile;
