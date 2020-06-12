import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar.js";
import axios from 'axios';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true} )
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  render() {
    return (
      <div>
        <Navbar loggedInStatus={this.props.loggedInStatus} userData={this.props.userData} />
        <h1>Dashboard</h1>
        <h2>Welcome, {this.props.userData.first_name}</h2>
        <button onClick={() => this.handleLogoutClick()}>Log out</button>
      </div>
    );
  }
}

