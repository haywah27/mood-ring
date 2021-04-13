import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav/index";
import Home from "./pages/Home";
import CaptureMood from "./pages/CaptureMood";
import NewMood from "./pages/NewMood";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// CaptureMood, NewMood, Login, SignUp } from "./pages"

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [moods, setMoods] = useState([]);
  const [reDownload, triggerReDownload] = useState("");
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/moods" exact component={() => <CaptureMood />} />
          <Route path="/new-mood" exact component={() => <NewMood />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/sign-up" exact component={() => <SignUp />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
