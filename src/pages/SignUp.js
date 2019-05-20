// dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// firebase
import withAuthentication from '../firebase/withAuthentication';
import withFirebase from '../firebase/withFirebase';

// routes
import {
  DASHBOARD
} from '../constants/routes';

class SignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      error: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.firebase
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch((error) => {
        this.setState({
          email: "",
          password: "",
          error: this.setErrorMessage(error)
        })
      })
  }

  setErrorMessage(error) {
    console.log(error)
    switch(error.code) {
      case "auth/email-already-in-use":
        return "auth/email-already-in-use";
      case "auth/invalid-email":
        return "auth/invalid-email";
      case "auth/weak-password":
        return "auth/weak-password";
      default:
        return "auth/unknown-error"
    }
  }

  render() {
    if (this.props.currentUser) {
      return <Redirect to={DASHBOARD}/>
    }

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              name="email"
              autoComplete="off"
              required
            />
          </label>
          <label>
            Password:
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              name="password"
              autoComplete="off"
              required
            />
          </label>
          <input type="submit" value="Sign Up"></input>
          { this.state.error && <div>{this.state.error}</div> }
        </form>
      </div>
    );
  }
}

export default withFirebase(withAuthentication(SignUp));
