import React, { useState } from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import { Jumbotron, Container, ListGroup } from "react-bootstrap";
import Chart from "../components/Chart/Chart";

function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  let userMoods;

  function userLoggedIn() {
    if (localStorage.getItem("Profile") !== null) {
      return localUser[0].name;
    } else {
      return "User Not Logged In";
    }
  }

  function displayHistory() {
    if (localUser != null) {
      userMoods = localUser[0].expressions;
      if (userMoods.length > 0) {
        const moodMap = userMoods.map((data) => {
          return <ListGroup.Item>{data}</ListGroup.Item>;
        });
        return (
          <>
            <h1 className="subtitle">Here's Your Recent Mood History</h1>
            {moodMap}
            <hr />
            <Chart></Chart>
          </>
        );
      } else {
        return <h1 className="subtitle">No Moods Saved Yet</h1>;
      }
    } else {
      return (
        <h1 className="subtitle">
          Login to see mood history.
          <br />
          Refresh Page After Login.
        </h1>
      );
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
            <ListGroup variant="flush" className="expressionHistory">
              {displayHistory()}
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
