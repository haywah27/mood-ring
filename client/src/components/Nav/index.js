import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

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



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="/">Moody Times</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="mr-auto">
    {/* filler to align nav on right */}
  </Nav>
  <Nav>
    <Nav.Link href="/">Home</Nav.Link>
    <Nav.Link href="/new-mood">New Mood</Nav.Link>
    {/* <Nav.Link href="/moods">Capture Mood</Nav.Link> */}
    <Nav.Link href="login">Login</Nav.Link>
    <Nav.Link href="sign-up">Sign Up</Nav.Link>
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


