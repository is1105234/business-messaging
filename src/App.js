// dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// firebase
import FirebaseAuthContext from './firebase/FirebaseAuthContext';
import withFirebase from './firebase/withFirebase'

// pages
import Dashboard from './components/layouts/Dashboard';
import Product from './components/layouts/Product';

import EmailUnverified from './pages/EmailUnverified';
import FinishSignUp from './pages/FinishSignUp';

// routes
import {
  DASHBOARD,
  EMAIL_UNVERIFIED,
  FINISH_SIGNUP,
  PRODUCT,
} from './constants/routes';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentUser: JSON.parse(localStorage.getItem('currentUser'))
    }
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(currentUser => {
      console.log("auth state changed ✴️")
      if (currentUser) {
        this.props.firebase.accountReference(currentUser.uid)
        .get()
        .then((doc) => {
          if (doc.exists) {
            currentUser = {...currentUser.toJSON(), ...doc.data()}
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            this.setState({
              currentUser: currentUser
            });
          }
        })
        .catch((error) => {
          console.log("rror:" + error)
        })
      } else {
        localStorage.removeItem('currentUser');
        this.setState({
          currentUser: null
        });
      }
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <FirebaseAuthContext.Provider value={this.state.currentUser}>
        <BrowserRouter>
          <Switch>
            <Route path={EMAIL_UNVERIFIED} component={EmailUnverified}/>
            <Route path={FINISH_SIGNUP} component={FinishSignUp}/>
            <Route path={DASHBOARD} component={Dashboard}/>
            <Route path={PRODUCT} component={Product}/>
          </Switch>
        </BrowserRouter>
      </FirebaseAuthContext.Provider>
    )
  }
}

export default withFirebase(App);
