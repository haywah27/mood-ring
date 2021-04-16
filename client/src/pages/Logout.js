import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "135452617126-oo0lohdfakjgm8sdjtbdk02doojua4t2.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully ✌");
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
