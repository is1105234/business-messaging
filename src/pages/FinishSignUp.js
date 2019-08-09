// dependencies
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// firebase
import withAuthentication from '../firebase/withAuthentication';
import withFirebase from '../firebase/withFirebase';

// routes
import { 
  DASHBOARD
 } from '../constants/routes';

class FinishSignUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: "",
      lastName: ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.firebase.accountReference(this.props.currentUser.uid)
    .update({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      signUpComplete: true
    })
    .then(() => {
        console.log("should push")
        this.props.firebase.reloadCurrentUser.reload().then(() => {
          console.log("nice")
           this.props.history.push(DASHBOARD);

        }).catch(() => {

        })
    })
    .catch((error) => {
        // The document probably doesn't exist.
    })
  }

  render() {
    return (
      <div>
        <h2>Finish Sign Up</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            First Name:
            <input
              value={this.state.firstName}
              onChange={this.handleChange}
              type="text"
              name="firstName"
              autoComplete="off"
              required
            />
          </label>
          <label>
            Last Name:
            <input
              value={this.state.lastName}
              onChange={this.handleChange}
              type="text"
              name="lastName"
              autoComplete="off"
              required
            />
          </label>
          <input type="submit" value="Done"></input>
        </form>
      </div>
    );
  }
}

export default withRouter(withFirebase(withAuthentication(FinishSignUp)));
