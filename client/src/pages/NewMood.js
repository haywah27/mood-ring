import React from "react";
import "./NewMood.css";
import { Jumbotron, Container, Button } from "react-bootstrap";
import Webcam from "../components/Webcam/Webcam";

function Home() {
  return (
    <div>
      <Container>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <h1 className="title">Mood Catcher</h1>
            <h5 className="body">
              How it works: <br /> 1. Click the button to start the live mood
              reader
              <br /> 2. Click the camera icon to capture your current mood
              <br /> 3. Explore the remedy or boost to your mood
              <br /> 4. Login to save your mood!
            </h5>

            <Webcam className="webcam" />
          </Container>
        </Jumbotron>
        <Jumbotron className="dimension text-center" fluid>
          <Container>
            <div className="subtitle">Here's some relevant content:</div>

            {/* insert remedy return */}
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
