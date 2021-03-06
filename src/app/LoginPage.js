import React, { Component } from 'react';
import Login from "./auth/Login";
import LoginNavbar from "./components/navbar/LoginNavbar.js";

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSuccessfulAuth = data => {
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div>
        <LoginNavbar />
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
