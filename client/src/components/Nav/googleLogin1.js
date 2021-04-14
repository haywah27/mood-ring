import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';



 export class Login2  extends   Component {

  responseGoogle=(response) =>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return(
      <div>
        <GoogleLogin
        clientId="135452617126-oo0lohdfakjgm8sdjtbdk02doojua4t2.apps.googleusercontent.com"
        buttonText="Login"
        onSucess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'singl_host_origin'}
        />
      </div>
    )
  }
}

export default Login2;