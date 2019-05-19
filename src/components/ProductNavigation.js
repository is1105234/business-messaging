// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// routes
import {
  DASHBOARD,
  FEATURES,
  HOME,
  LOGIN,
  PRICING,
  SIGNUP
} from '../constants/routes';

const ProductNavigation = () => (
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
    <li>
      <NavLink to={DASHBOARD}>Dashboard</NavLink>
    </li>
  </ul>
)

export default ProductNavigation;