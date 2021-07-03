import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import userContext from "../../context/userContext";
import { Row, Col } from "react-bootstrap";

export default function AuthOptions() {
  const { userData, setUserData } = useContext(userContext);

  const history = useHistory();

  const register = () => history.push("/register");
  const login = () => history.push("/login");
  const example = () => history.push("/example");
  const profile = () => history.push("/profile");
  const explore = () => history.push("/explore");
  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    localStorage.setItem("User_id", "");
    history.push("/login");
  };

  return (
    <nav className="auth-options">
      {userData.user ? (
        <>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={explore}
                style={{ borderRadius: "0" }}
              >
                Explore
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={profile}
                style={{ borderRadius: "0" }}
              >
                Profile
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={logout}
                style={{ borderRadius: "0" }}
              >
                Log out
              </button>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={explore}
                style={{ borderRadius: "0" }}
              >
                Explore
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={profile}
                style={{ borderRadius: "0" }}
              >
                Profile
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={logout}
                style={{ borderRadius: "0" }}
              >
                Log out
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={register}
                style={{ borderRadius: "0" }}
              >
                Sign Up
              </button>
            </Col>
          </Row>
          <Row>
            <Col style={{ marginRight: "20px", marginTop: "20px" }}>
              <button
                class="btn btn-outline-secondary mx-2 w-100 text-white"
                onClick={login}
                style={{ borderRadius: "0" }}
              >
                Login
              </button>
            </Col>
          </Row>
        </>
      )}
    </nav>
  );
}
