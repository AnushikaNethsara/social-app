import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import Sidebar from "react-sidebar";

// import AddDoctorButton from "./AddDoctorButton";

export class navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  render() {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container fluid>
            <button
              style={{ color: "white", fontSize: "30px" }}
              onClick={() => this.onSetSidebarOpen(true)}
            >
              <i class="fa fa-bars"></i>
            </button>
            <Link
              style={{ marginLeft: "20px" }}
              class="navbar-brand"
              to="/explore"
            >
              Social APP
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav>
                <Nav.Link eventKey={2}></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {this.state.sidebarOpen ? (
          <Sidebar
            sidebar={
              <>
                <Button
                  style={{ marginLeft: "300px", marginTop: "10px" }}
                  variant="danger"
                  onClick={() => this.onSetSidebarOpen(false)}
                >
                  <i class="fa fa-close"></i>
                </Button>
                <AuthOptions />
              </>
            }
            open={this.state.sidebarOpen}
            onSetOpen={this.onSetSidebarOpen}
            styles={{
              sidebar: { background: "#333", width: "350px", zIndex: "1080" },
            }}
          ></Sidebar>
        ) : null}
      </>
    );
  }
}

export default navbar;
