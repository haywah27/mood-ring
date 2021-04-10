import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Link to="/moods"> All Notes</Link>
        <br />
        <Link to="/new-mood"> Check Mood</Link>
      </div>
    </Router>
  );
}


export default App;
