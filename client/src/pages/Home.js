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
            <h5 className="body">
              We work to determine your current mood and provide content to
              match..Blahblahblah. WIP.
            </h5>
            <br />
            <Button
              href="/new-mood"
              className="getStartedButton"
              size="huge"
            >
              Get Started
            </Button>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
