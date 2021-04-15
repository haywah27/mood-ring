import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import "./nav.css";

function Navigation() {
  return (
    //     <div className="navigation">
    //       <nav class="navbar navbar-expand navbar-dark bg-dark">
    //         <div class="container">
    //           <Link class="navbar-brand" to="/">
    //             Moody Times
    //           </Link>
    //           <div>
    //             <ul class="navbar-nav ml-auto">
    //               <li class={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
    //                 <Link class="nav-link" to="/">
    //                   Home
    //                   <span class="sr-only">(current)</span>
    //                 </Link>
    //               </li>
    //               <li class={`nav-item  ${props.location.pathname === "/moods" ? "active" : ""}`}>
    //                 <Link class="nav-link" to="/moods">
    //                   Capture Mood
    //                 </Link>
    //               </li>
    //               <li class={`nav-item  ${props.location.pathname === "/new-mood" ? "active" : ""}`}>
    //                 <Link class="nav-link" to="/new-mood">
    //                   New Mood
    //                 </Link>
    //               </li>
    //               <li class={`nav-item  ${props.location.pathname === "/Login" ? "active" : ""}`}>
    //                 <Link class="nav-link" to="/Login">
    //                   Login
    //                 </Link>
    //               </li>
    //               <li class={`nav-item  ${props.location.pathname === "/sign-up" ? "active" : ""}`}>
    //                 <Link class="nav-link" to="/sign-up">
    //                   Sign Up
    //                 </Link>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </nav>
    //     </div>

    /* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<nav className="navbar">
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      href="/"
    >
      Home
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      href="/new-mood"
    >
      New Mood
    </NavLink>
    <NavLink
      activeClassName="navbar__link--active"
      className="navbar__link"
      href="/login"
    >
      Login
    </NavLink>
    <NavLink
      exact
      activeClassName="navbar__link--active"
      className="navbar__link"
      href="/User"
    >
      My Profile
    </NavLink>
  </nav>
);
</Navbar>


  ); */

    <Navbar collapseOnSelect expand="lg" className="nav" variant="dark">
      <Navbar.Brand href="/" className="navbar-header">Mood Ring</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" bg="dark" variant="dark">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link
            className="navbar-link"
            href="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="navbar-link"
            href="/new-mood"
          >
            New Mood
          </Nav.Link>
          <Nav.Link
            className="navbar-link"
            href="/login"
          >
            Login
          </Nav.Link>
          <Nav.Link
            className="navbar-link"
            href="/User"
          >
            My Profile
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;

/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Navbar.Brand href="/">Moody Times</Navbar.Brand>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/new-mood">New Mood</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/moods">Capture Mood</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link href="sign-up">Sign Up</Nav.Link>
      </Nav>
    </Navbar.Collapse>
</Navbar> */
