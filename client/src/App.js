import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Nav/index";
import LogoutNav from "./components/Nav/logoutNav";
import Home from "./pages/Home";
import CaptureMood from "./pages/CaptureMood";
import NewMood from "./pages/NewMood";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import User from "./pages/User";
import Webcam from "./components/Webcam/Webcam";
import "./App.css";

function App() {
  // const [moods, setMoods] = useState([]);
  // const [reDownload, triggerReDownload] = useState("");
  return (
    <div>
      <Router>
      {/* {!isLoggedIn && (<Navigation />)}
      {isLoggedIn && (<LogoutNav />)} */}
        
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/moods" exact component={() => <CaptureMood />} />
          <Route path="/new-mood" exact component={() => <NewMood />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/logout" exact component={() => <Logout />} />
          <Route path="/user" exact component={() => <User />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
