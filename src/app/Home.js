import React, { Component } from 'react';
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import { Link } from 'react-router-dom';
import Navbar from "./navbar/Navbar.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} userData={this.props.userData} />
        {this.props.loggedInStatus === "LOGGED_IN" ? <Link to='/dashboard'>Dashboard</Link> : null }
      </div>
    );
  }
}
