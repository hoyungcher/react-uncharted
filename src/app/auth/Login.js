import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loginErrors: ""
    };
  }

  handleSubmit = event => {
    const {
      email,
      password
    } = this.state;

    axios.post("http://localhost:3001/sessions", {
      user: {
        email: email,
        password: password
      }
    },
    { withCredentials: true }
    ).then(response => {
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data);
      };
    }).catch(error => {
      console.log("login error", error);
    })
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Container className="mt-5">
          <Col md={{ span: 6, offset: 3 }} sm={{ span: 10, offset: 1 }}>
            <h1>Login</h1>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Type your password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit" className="my-1">
                Login
              </Button>
            </Form>
          </Col>
        </Container>
      </div>
    );
  }
}
