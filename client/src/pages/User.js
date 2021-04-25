import React from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import { Jumbotron, Container, ListGroup } from "react-bootstrap";
import API from "../utils/API";

// class User extends Component{
// window.location.reload();



function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  let yourMom;
  let moodList;


  function getMoods() {
    if (localStorage.getItem("Profile") !== null) {
      yourMom = localUser[0].expressions;

      moodList = yourMom.map((mood) => <ListGroup.Item>{mood}</ListGroup.Item>);

      console.log("mom", yourMom);
      return (
        <>
          <h1 className="title">Hello, {localUser[0].name}!</h1>
          <hr />
          <h1 className="subtitle">Here's Your Mood History</h1>
          <ListGroup variant="flush" className="expressionHistory">
            {moodList.slice(Math.max(moodList.length - 5, 0))}
          </ListGroup>
          <br />
          <br />
        </>
      );
    } else {
      return <h1 className="subtitle">Please Login To See Mood History</h1>;
    }
  }


  return (
    <>
      <Navigation />
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>{getMoods()}</Container>
        </Jumbotron>
      </Container>
    </>
  );
}

export default User;
