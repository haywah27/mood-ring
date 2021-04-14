import React from 'react';
import { Form } from 'react-bootstrap';
import { GoogleLogin } from 'react-google-login';
import {refreshTokenSetup} from '../utils/freshToken'

const clientId =
  '135452617126-oo0lohdfakjgm8sdjtbdk02doojua4t2.apps.googleusercontent.com';

function Login() {
  const onSuccess = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);

    refreshTokenSetup(res);

  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);

  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        style={{ marginTop: '100px' }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;