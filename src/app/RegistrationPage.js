import React, { Component } from 'react';
import Registration from "./auth/Registration";
import LoginNavbar from "./navbar/LoginNavbar.js";

export default class RegistrationPage extends Component {
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
        <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
      </div>
    );
  }
}
