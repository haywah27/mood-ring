import React, { useState, Component } from "react";
import "./User.css";
import {
  Jumbotron,
  Container,
  Card,
  ListGroup,
  Row,
  Col,
} from "react-bootstrap";
import axios from "axios";
import Login from "../pages/Login";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      expression: "",
      googleId: "",
    };
  }
  componentDidMount() {
    document.getElementsByClassName("new-mood").className = "";
    document.getElementsByClassName("login").className = "";
    document.getElementsByClassName("home").className = "";
    document.getElementsByClassName("user").className = "active";
  }

  getProfile() {
    var user = this;
    axios
      .post("/getProfile", {})
      .then(function (response) {
        user.setState({ name: response.data.name });
        user.setState({ expression: response.data.expression });
      })
      .catch(function (error) {
        console.log("error is ", error);
      });
  }

  render() {
    return (
      <div>
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
                            My User Name
                          </h3>

                          <label value={this.state.name} type="text" />

                          <h3 className="userNameDisplay text-center">
                            My Current Mood
                          </h3>

                          <label
                            value={this.state.expression}
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
                    <h4> Here"s a quick look at your last 5 expressions</h4>
                    <ListGroup variant="flush" className="expressionHistory">
                      <ListGroup.Item>Expression :</ListGroup.Item>
                      <ListGroup.Item>Expression</ListGroup.Item>
                      <ListGroup.Item>Expression</ListGroup.Item>
                      <ListGroup.Item>Expression</ListGroup.Item>
                      <ListGroup.Item>Expression</ListGroup.Item>
                    </ListGroup>
                    <Card>
                      <Card.Body>
                        <Card.Link href="#">Link to something </Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                      </Card.Body>
                    </Card>
                    <div className="justify-content-md-center">
                      <Login />
                    </div>
                  </Jumbotron>
                </Col>
              </Row>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

// function getUserInfo(username, callback) {
//   MongoClient.connect(url, function (err, db) {
//     db.collection("user").findOne({ name: "Name" }, function (err, result) {
//       if (result == null) {
//         callback(false);
//       } else {
//         callback(result);
//       }
//     });
//   });

// }

export default User;
