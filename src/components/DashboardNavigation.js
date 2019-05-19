// dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

// routes
import {
  CAMPAIGNS,
  MESSAGES
} from '../constants/routes';

const DashboardNavigation = () => (
  <ul>
    <li>
      <NavLink to={MESSAGES}>Messages</NavLink>
    </li>
    <li>
      <NavLink to={CAMPAIGNS}>Campaigns</NavLink>
    </li>
  </ul>
)

export default DashboardNavigation