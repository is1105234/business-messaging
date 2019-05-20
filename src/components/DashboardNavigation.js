// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// firebase
import withFirebase from '../firebase/withFirebase';

// routes
import {
  CAMPAIGNS,
  MESSAGES
} from '../constants/routes';

const DashboardNavigation = (props) => (
  <ul>
    <li>
      <NavLink to={MESSAGES}>Messages</NavLink>
    </li>
    <li>
      <NavLink to={CAMPAIGNS}>Campaigns</NavLink>
    </li>
    <li>
      <button type="button" onClick={props.firebase.signOut}>Sign Out</button>
    </li>
  </ul>
)


export default withFirebase(DashboardNavigation);