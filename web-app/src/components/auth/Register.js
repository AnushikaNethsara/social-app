import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import "../../css/style.css";
import Axios from "axios";
import UserContext from "../../context/userContext";
import ErrorNotice from "../misc/ErrorNotice";
import Cal from "../../images/cal.png";
import constants from "../../constants/constants";
import { Row, Col } from "react-bootstrap";
import "./style.css";

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [displayName, setDisplayName] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const newUser = { email, password, passwordCheck, displayName };
      await Axios.post(constants.backend_url + "/users/register", newUser);
      const loginRes = await Axios.post(
        constants.backend_url + "/users/login",
        {
          email,
          password,
        }
      );
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      history.push("/profile");
    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="back2">
      <div>
        <div
          class="container-lg  shadow p-3 mb-5  text-dark"
          style={{ marginTop: "5%" }}
        >
          <div class="row row-cols-2">
            <div class="col">
              <div
                class="container-sm   p-3 mb-5 rounded text-dark"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.70)",
                  height: "97.6%",
                }}
              >
                <div style={{ marginTop: "7%" }}>
                  <div class="mx-auto">
                    <h2>Sign Up</h2>
                  </div>
                  <p>Please Signup Before login to your Acount</p>
                  {error && (
                    <ErrorNotice
                      message={error}
                      clearError={() => setError(undefined)}
                    />
                  )}
                  <div>
                    <form onSubmit={submit}>
                      <div className="mb-2">
                        <Row>
                          <Col>
                            <div className="mb-2">
                              <label className="form-label">First Name</label>
                              <input
                                type="text"
                                id="register-display-name"
                                className="form-control"
                                onChange={(e) => setDisplayName(e.target.value)}
                              />
                            </div>
                          </Col>
                          <Col>
                            <div className="mb-2">
                              <label className="form-label">Last Name</label>
                              <input
                                type="text"
                                id="register-display-name"
                                className="form-control"
                                onChange={(e) => setDisplayName(e.target.value)}
                              />
                            </div>
                          </Col>
                        </Row>
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email"
                          aria-describedby="emailHelp"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className="mb-2">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="exampleInputPassword1"
                          className="form-label"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="Verify password"
                          onChange={(e) => setPasswordCheck(e.target.value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-dark ml-150 px-5 w-100"
                        value="Register"
                      >
                        Sign Up
                      </button>
                      <p className="text-mute mt-3 text-center">
                        Already have an account yet?{" "}
                        <Link to="/login">Login Now!</Link>
                      </p>
                    </form>
                  </div>
                  <p></p>
                </div>
              </div>
            </div>
            <div class="col"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
