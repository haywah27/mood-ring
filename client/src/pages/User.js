import React, { useState } from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import { Jumbotron, Container, ListGroup } from "react-bootstrap";
import API from "../utils/API";

// class User extends Component{
function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  
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
              {localUser != null ? (
                localUser[0].expressions.length > 0 ? (
                  localUser[0].expressions.map((data) => {
                    return(
                      <ListGroup.Item>Expression: {data}</ListGroup.Item>
                    )
                  }) 
                ) : (
                  <ListGroup.Item>No Moods Saved Yet</ListGroup.Item>
                )
              ) : (
                <ListGroup.Item>No User Logged In, Refresh Page After Login</ListGroup.Item>
              )}
              {/* <ListGroup.Item>Expression :</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item>
              <ListGroup.Item>Expression</ListGroup.Item> */}
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
