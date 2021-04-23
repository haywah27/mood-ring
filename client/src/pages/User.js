import React from 'react';
import './User.css';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import axios from "axios";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      expression: '',
      googleId: '',
    };
  }
  componentDidMount() {
    document.getElementsByClassName('new-mood').className = '';
    document.getElementsByClassName('login').className = '';
    document.getElementsByClassName('home').className = '';
    document.getElementsByClassName('user').className = 'active';
    this.getProfile();
  }

  getProfile() {
    var user = this;
    axios
      .post('/getProfile', {})
      .then(function (response) {
        user.setState({ name: response.data.name });
        user.setState({ expression: response.data.expression });
      })
      .catch(function (error) {
        console.log('error is ', error);
      });
  }

  render() {
    return (
      <div>
        <Container>
          <Jumbotron className='userDisplay' fluid>
            <Container>
              <div className='col-md-5'>
                <h1 className='userTitle'> My Profile </h1>

                <div className='userBody'>
                  <input
                    value={this.state.name}
                    type='text'
                    placeholder='Name'
                    required
                  />
                  <input
                    value={this.state.expression}
                    type='expression'
                    placeholder='expression'
                    required
                  />
                </div>

                {/* <button
                  type='button'
                  onClick={this.updateProfile}
                  id='submit'
                  name='submit'
                  className='btn btn-primary pull-right'
                >
                  Update
                </button> */}
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

// function getUserInfo(username, callback) {
//   MongoClient.connect(url, function (err, db) {
//     db.collection('user').findOne({ name: "Name" }, function (err, result) {
//       if (result == null) {
//         callback(false);
//       } else {
//         callback(result);
//       }
//     });
//   });

// }

export default User;
