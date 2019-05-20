// dependencies
import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

// firebase
import withAuthentication from '../firebase/withAuthentication';
import withFirebase from '../firebase/withFirebase';

// routes
import {
  DASHBOARD,
  FEATURES,
  HOME,
  LOGIN,
  PRICING,
  SIGNUP
} from '../constants/routes';

class ProductNavigation extends Component {
  render() {
    return (
      <Fragment>
        { this.props.currentUser ? <AuthNavigation firebase={this.props.firebase}/> : <NonAuthNavigation/> }
      </Fragment>
    )
  }
}

const NonAuthNavigation = () => (
  <ul>
    <li>
      <NavLink to={HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={FEATURES}>Features</NavLink>
    </li>
    <li>
      <NavLink to={PRICING}>Pricing</NavLink>
    </li>
    <li>
      <NavLink to={LOGIN}>Log In</NavLink>
    </li>
    <li>
      <NavLink to={SIGNUP}>Sign Up</NavLink>
    </li>
  </ul>
)

const AuthNavigation = (props) => (
  <ul>
    <li>
      <NavLink to={HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={FEATURES}>Features</NavLink>
    </li>
    <li>
      <NavLink to={PRICING}>Pricing</NavLink>
    </li>
    <li>
      <NavLink to={DASHBOARD}>Dashboard</NavLink>
    </li>
    <li>
      <button type="button" onClick={props.firebase.signOut}>Sign Out</button>
    </li>
  </ul>
)

export default withFirebase(withAuthentication(ProductNavigation));