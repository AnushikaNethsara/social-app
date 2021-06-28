import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

// import AddDoctorButton from "./AddDoctorButton";

export class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Link class="navbar-brand" to="/explore">
            Social APP
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link eventKey={2}>
                <AuthOptions />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default navbar;
