import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: ""
    };
  }

  handleSubmit = event => {
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation
    } = this.state;

    axios.post("http://localhost:3001/registrations", {
      user: {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      }
    },
    { withCredentials: true }
    ).then(response => {
      if (response.data.status === "created") {
        this.props.handleSuccessfulAuth(response.data);
      };
    }).catch(error => {
      console.log("registration error", error);
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
            <h1>Registration</h1>
            <Form onSubmit={this.handleSubmit} >
              <Form.Group controlId="formGroupFirstName">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="first_name"
                  placeholder="First name"
                  value={this.state.first_name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formGroupLastName">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  value={this.state.last_name}
                  onChange={this.handleChange}
                />
              </Form.Group>
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
              <Form.Group controlId="formGroupPasswordConfirmation">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  name="password_confirmation"
                  placeholder="Type your password again"
                  value={this.state.password_confirmation}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button type="submit" className="my-1">
                Create my Account
              </Button>
            </Form>
          </Col>
        </Container>
      </div>
    );
  }
}
