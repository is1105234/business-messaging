// dependencies
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// firebase
import withAuthentication from '../firebase/withAuthentication';
import withFirebase from '../firebase/withFirebase';

// routes
import {
  HOME
} from '../constants/routes';

class EmailUnverified extends Component {
  render() {
    if (this.props.currentUser === null) {
      return <Redirect to={HOME}/>
    }

    return (
      <div>
        <h2>Email Unverified</h2>
        <p>Please confirm your email address to activate your account.</p>
        <button type="button" onClick={this.props.firebase.signOut}>Sign Out</button>
      </div>
    )
  }
}

export default withFirebase(withAuthentication(EmailUnverified));
