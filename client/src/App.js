import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewMood from "./pages/NewMood";
import Login from "./pages/Login";
import User from "./pages/User";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/new-mood" exact component={() => <NewMood />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/user" exact component={() => <User />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
