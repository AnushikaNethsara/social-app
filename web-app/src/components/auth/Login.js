import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import UserContext from "../../context/userContext";
import Axios from "axios";
import ErrorNotice from "../misc/ErrorNotice";
import constants from "../../constants/constants";
import "./style.css";

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const { setUserData } = useContext(UserContext);
  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRes = await Axios.post(
        constants.backend_url + "/users/login",
        loginUser
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
    <div className="back">
      <div>
        <div
          class="container-lg  shadow p-3 mb-5  text-dark"
          style={{ marginTop: "5%" }}
        >
          <div class="container-lg text-dark">
<<<<<<< HEAD
            <div class="row row-cols-2" style={{ height: "700px" }}>
=======
            <div class="row row-cols-2" style={{ height: "90vh" }}>
>>>>>>> 74fb7a332c2e9f5bf547a5873ce2756fd20cda96
              <div class="col">
                <div
                  class="container-sm   p-3 mb-5 rounded text-dark "
                  style={{
                    marginTop: "25%",
                    backgroundColor: "rgba(255, 255, 255, 0.70)",
                  }}
                >
                  <div>
                    <div class="mx-auto">
                      <h2>Login</h2>
                    </div>
                    <p>Please Login to your Acount</p>
                    {error && (
                      <ErrorNotice
                        message={error}
                        clearError={() => setError(undefined)}
                      />
                    )}
                    <div>
                      <form onSubmit={submit}>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="login-email"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            id="login-password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-dark ml-150 px-5 w-100"
                          value="Log in"
                        >
                          Sign In
                        </button>
                        <br></br>
                        <p className="text-mute mt-3  text-center">
                          Don't have an account yet?{" "}
                          <Link to="/register">Signup Now!</Link>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
