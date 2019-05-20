import React from 'react';

import FirebaseAuthContext from './FirebaseAuthContext';

const withAuthentication = (Component) => (props) => (
  <FirebaseAuthContext.Consumer>
    {currentUser => <Component {...props} currentUser={currentUser} />}
  </FirebaseAuthContext.Consumer>
);

export default withAuthentication