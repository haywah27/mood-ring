import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/">
            Moody Times
          </Link>
          <div>
            <ul class="navbar-nav ml-auto">
              <li class={`nav-item ${props.location.pathname === "/" ? "active" : ""}`}>
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/moods" ? "active" : ""}`}>
                <Link class="nav-link" to="/moods">
                  Capture Mood
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/new-mood" ? "active" : ""}`}>
                <Link class="nav-link" to="/new-mood">
                  New Mood
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/Login" ? "active" : ""}`}>
                <Link class="nav-link" to="/Login">
                  Login
                </Link>
              </li>
              <li class={`nav-item  ${props.location.pathname === "/sign-up" ? "active" : ""}`}>
                <Link class="nav-link" to="/sign-up">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
