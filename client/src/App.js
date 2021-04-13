import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [moods, setMoods] = useState([]);
  const [reDownload, triggerReDownload] = useState("");
  return (
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

    // <Router>
    //   <div>
    //     <Link to="/"> Home</Link>
    //     <br />
    //     <Link to="/moods"> All Moods</Link>
    //     <br />
    //     <Link to="/new-mood"> Check Mood</Link>
    //     <br />
    //     <Link to="/login"> Login</Link>
    //     <br />
    //     <Link to="/sign-up"> Sign Up</Link>
    //   </div>
    //   <Switch>
    //     <Route path="/moods">
    //         hello all moods page
    //     </Route>
    //     <Route path="/new-mood">
    //         hello new-mood page
    //     </Route>
    //     <Route path="/login">
    //         hello login page
    //     </Route>
    //     <Route path="/sign-up">
    //         hello sign-up page
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
