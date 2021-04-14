import React from "react";
import "./Home.css";
import { Jumbotron, Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      hello home page
      <Container >
        <Jumbotron className="dimension text-center" fluid>
          <Container >
            <h1 className="title">Welcome to Moody Times!</h1>
            <h5 className="body">
              We work to determine your current mood and provide content to match..Blahblahblah. WIP.
            </h5>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default Home;
