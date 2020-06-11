import React, { Component } from 'react';
import Login from "./auth/Login";
import Navbar from "./navbar/Navbar.js";

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
        <p>Login</p>
        <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
