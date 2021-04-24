import React, { useState } from "react";
// import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import LogoutNav from "./logoutNav";
import LoginNav from "./loginNav";
import "./nav.css";

function Navigation() {

  function handleLogin() {
    if (localStorage.getItem("Profile") === null) {
      return (<LoginNav></LoginNav>);
    } else {
      return <LogoutNav></LogoutNav>;
    }
  }

  return <>{handleLogin()}</>;
}

export default Navigation;
