import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import axios from 'axios';
import ProtectedRoute from './hoc/ProtectedRoute';
import Categories from './components/categories/Categories';
import Category from './components/categories/Category';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then(response => {
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        }
    })
      .catch(error => {
        console.log("check login error", error);
      })
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin = data => {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  handleLogout = () => {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    });
  }

  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <Switch>
            <Route
              exact path={'/'}
              render={ props => (
                <Home {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  userData={this.state.user}
                />
              )}
            />
            <ProtectedRoute
              exact path={'/dashboard'}
              loggedInStatus={this.state.loggedInStatus}
              userData={this.state.user}
              handleLogout={this.handleLogout}
              component={Dashboard}
            />
            <Route
              exact path={'/registration'}
              render={ props => (
                <RegistrationPage {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              exact path={'/login'}
              render={ props => (
                <LoginPage {...props}
                  loggedInStatus={this.state.loggedInStatus}
                  handleLogin={this.handleLogin}
                />
              )}
            />
            <Route
              exact path={'/categories'}
              render={ props => (
                <Categories {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  userData={this.state.user}
                />
              )}
            />
            <Route
              exact path={'/categories/:slug'}
              render={ props => (
                <Category {...props}
                  handleLogin={this.handleLogin}
                  loggedInStatus={this.state.loggedInStatus}
                  userData={this.state.user}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
