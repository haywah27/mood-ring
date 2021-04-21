import React, { useState } from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/freshToken";
import GoogleLogout from "./Logout";

const clientId =
  "135452617126-oo0lohdfakjgm8sdjtbdk02doojua4t2.apps.googleusercontent.com";


function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSuccess = (res) => {
    setIsLoggedIn(true);
    console.log("Login Success: currentUser:", res.profileObj);
    // alert(
    //   `Logged in successfully welcome ${res.profileObj.name} 😍. \n See console for full profile object.`
    // );
    refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login. 😢 `);
  };

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
      )}
      {isLoggedIn && <GoogleLogout></GoogleLogout>}
    </div>
  );
}

export default Login;
