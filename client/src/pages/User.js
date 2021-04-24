import React from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import { Jumbotron, Container, Button } from "react-bootstrap";
import API from "../utils/API";

// class User extends Component{
function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  // console.log("localUser:", localUser[0].googleId)

  function getMoods() {
    let expressions;
    API.findProfileUser(localUser[0].googleId).then(function (response) {
      console.log("this is new response", response);
      // localStorage.setItem("Profile", JSON.stringify(response))

      // expressions = response.data[0].expressions;
      // console.log("expressions",expressions)
    });
  }
  // getMoods();

  return (
    <>
      <Navigation />
      {/* <div>
        {localUser[0].name}
      </div> */}
      {/* <div>
        Moods
        {getMoods.expressions}
      </div> */}
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <h1 className="title">Hello {localUser[0].name}!</h1>
            <hr />
            <h1 className="subtitle">Here's Your Mood History</h1>
            <br />
            <br />

          </Container>
        </Jumbotron>
      </Container>
      
    </>
  );
}

export default User;
