import React from "react";
import "./Home.css";
import { Jumbotron, Container, Button } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <h1 className="title">Welcome to Mood Ring!</h1>
            <hr />
            <h5 className="body">
              Explore our facial recognition technology to capture your current emotion and we'll provide content that serves as a type of "remedy" or "boost" to your current emotion. 
              <hr />
              Users who login will be able to see a history of previous moods or you can decide to just play with the app without having to create an account.
            </h5>
            <br />
            <br />
            <Button href="/login" className="getStartedButton" size="huge">
              Login
            </Button>
            <div className="subtitle"> OR </div>
            <Button href="/new-mood" className="getStartedButton" size="huge">
              Check Mood
            </Button>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
