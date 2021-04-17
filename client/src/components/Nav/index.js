import React from "react";
// import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "./nav.css";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
      <Navbar.Brand href="/" className="navbar-header">
        Mood Ring
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link className="navbar-link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/new-mood">
            New Mood
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/login">
            Login
          </Nav.Link>
          <Nav.Link className="navbar-link" href="/user">
            My Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
