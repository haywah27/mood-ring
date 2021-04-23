class ShowProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      expression: '',
      googleId: '',
    };
  }
  componentDidMount() {
    document.getElementByClass('new-mood').className = '';
    document.getElementByClass('login').className = '';
    document.getElementByClass('home').className = '';
    document.getElementByClass('user').className = 'active';
    this.getProfile();
  }

  getProfile() {
    var self = this;
    axios
      .post('/getProfile', {})
      .then(function (response) {
        self.setState({ name: response.data.name });
        self.setState({ expression: response.data.expression });
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
                    onChange={this.handleNameChange}
                    className='form-control'
                    placeholder='Name'
                    required
                  />
                  <input
                    value={this.state.expression}
                    type='expression'
                    className='form-control'
                    placeholder='expression'
                    required
                  />
                </div>

                <input
                  value={this.state.expression}
                  type='expression'
                  className='form-control'
                  placeholder='expression'
                  required
                />

                <button
                  type='button'
                  onClick={this.updateProfile}
                  id='submit'
                  name='submit'
                  className='btn btn-primary pull-right'
                >
                  Update
                </button>
              </div>
            </Container>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}

function getUserInfo(username, callback) {
  MongoClient.connect(url, function (err, db) {
    db.collection('user').findOne({ email: username }, function (err, result) {
      if (result == null) {
        callback(false);
      } else {
        callback(result);
      }
    });
  });
}
