import React from "react";
import "./User.css";
import {
  Jumbotron,
  Container,
  Card,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import Navigation from "../components/Nav/index";


function User () {
  
  const profile = JSON.parse(localStorage.getItem("Profile"));

  return (
    <div>
      <Navigation></Navigation>
      <Container>
        <Jumbotron className="userDisplay" fluid>
          <Container fluid="md">
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Jumbotron fluid>
                  <h1 className="header text-center">
                    Welcome To Your Mood Ring Profile
                  </h1>
                  <Card>
                    <Card.Body>
                      <Card.Text>
                        <h3 className="userNameDisplay text-center">
                          {profile[0].name}
                        </h3>

                        <label  type="text" />

                        <h3 className="userNameDisplay text-center">
                          My Current Mood
                        </h3>

                        <label
                          type="text"
                          placeholder="expression"
                          required
                        />
                      </Card.Text>
                      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    </Card.Body>
                  </Card>
                </Jumbotron>
              </Col>
            </Row>
          </Container>

          <Container fluid="md">
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Jumbotron fluid>
                  <h1>Mood History</h1>
                  <h4> Here's a quick look at your last 5 expressions</h4>
                  <ListGroup variant="flush" className="expressionHistory">
                    <ListGroup.Item>Expression :</ListGroup.Item>
                    <ListGroup.Item>Expression</ListGroup.Item>
                    <ListGroup.Item>Expression</ListGroup.Item>
                    <ListGroup.Item>Expression</ListGroup.Item>
                    <ListGroup.Item>Expression</ListGroup.Item>
                  </ListGroup>


                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    </div>
  );
}


export default User;
