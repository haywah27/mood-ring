import React from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import { Jumbotron, Container, ListGroup } from "react-bootstrap";
import API from "../utils/API";

// class User extends Component{
function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  

  function getMoods() {
    let expressions;
    API.findProfileUser(localUser[0].googleId).then(function (response) {
      console.log("this is new response", response);
    });
  }

  function userLoggedIn() {
    if (localStorage.getItem("Profile") !== null) {
      return (localUser[0].name);
    } else {
      return ("User Not Logged In")
    }
  }

  return (
    <>
      <Navigation />
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <h1 className="title">{userLoggedIn()}</h1>
            <hr />
            <h1 className="subtitle">Here's Your Mood History</h1>
            <ListGroup variant="flush" className="expressionHistory">
              <ListGroup.Item>Expression :</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
            </ListGroup>
            <br />
            <br />
          </Container>
        </Jumbotron>
      </Container>
    </>
  );
}

export default User;
