// dependencies
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// pages
import Dashboard from './components/layouts/Dashboard';
import Product from './components/layouts/Product';

// routes
import {
  DASHBOARD,
  PRODUCT,
} from './constants/routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={DASHBOARD} component={Dashboard}/>
          <Route path={PRODUCT} component={Product}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
