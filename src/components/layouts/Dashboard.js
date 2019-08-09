// dependencies
import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

// firebase
import withAuthentication from '../../firebase/withAuthentication';

// pages
import Campaign from '../../pages/Campaign'
import Campaigns from '../../pages/Campaigns'
import Messages from '../../pages/Messages';
import MessagesThread from '../../pages/MessagesThread';

// components
import DashboardNavigation from '../DashboardNavigation';

// routes
import {
  CAMPAIGN,
  CAMPAIGNS,
  EMAIL_UNVERIFIED,
  FINISH_SIGNUP,
  LOGIN,
  MESSAGES,
  MESSAGES_THREAD
} from '../../constants/routes';

class Dashboard extends Component {
  render() {
    if (this.props.currentUser === null) {
      return <Redirect to={LOGIN}/>
    }

    if (this.props.currentUser.emailVerified === false) {
      return <Redirect to={EMAIL_UNVERIFIED}/>
    }

    if (this.props.currentUser.signUpComplete === false) {
      return <Redirect to={FINISH_SIGNUP}/>
    }

    return (
      <div>
        <DashboardNavigation/>

        <Switch>
          <Route path={CAMPAIGN} component={Campaign}/>
          <Route path={CAMPAIGNS} component={Campaigns} exact={true}/>
          <Route path={MESSAGES} component={Messages} exact={true}/>
          <Route path={MESSAGES_THREAD} component={MessagesThread}/>

          <Redirect from="/dashboard" to="/dashboard/messages"/>
        </Switch>
      </div>
    )
  }
}

export default withAuthentication(Dashboard);