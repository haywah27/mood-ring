import React from "react";
import API from '../utils/API'

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/freshToken";

const clientId =
  "135452617126-oo0lohdfakjgm8sdjtbdk02doojua4t2.apps.googleusercontent.com";

function Login() {

  const onSuccess = (res) => {

    console.log("Login Success: currentUser:", res.profileObj);
    API.findUser({googleId: res.profileObj.googleId, name: res.profileObj.name})
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
