import React from "react";
import "./User.css";
import Navigation from "../components/Nav/index";
import API from "../utils/API";

// class User extends Component{
function User() {
  const localUser = JSON.parse(localStorage.getItem("Profile"));
  // console.log("localUser:", localUser[0].googleId)

  function getMoods() {
    let expressions;
    API.findProfileUser(localUser[0].googleId).then(function (response) {
      console.log("this is new response", response);
      // localStorage.setItem("Profile", JSON.stringify(response))

      // expressions = response.data[0].expressions;
      // console.log("expressions",expressions)
    });
  }
  // getMoods();

  return (
    <>
      <Navigation />
      {/* <div>
        {localUser[0].name}
      </div> */}
      {/* <div>
        Moods
        {getMoods.expressions}
      </div> */}
      
    </>
  );
}

export default User;
