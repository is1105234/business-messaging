// dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages
import Features from '../../pages/Features';
import Home from '../../pages/Home';
import LogIn from '../../pages/LogIn';
import Pricing from '../../pages/Pricing';
import SignUp from '../../pages/SignUp';

// components
import ProductNavigation from '../ProductNavigation';

// routes
import {
  FEATURES,
  HOME,
  LOGIN,
  PRICING,
  SIGNUP
} from '../../constants/routes';

const Product = () => (
  <div>
    <ProductNavigation/>

    <Switch>
      <Route path={FEATURES} component={Features}/>
      <Route path={HOME} component={Home} exact={true}/>
      <Route path={LOGIN} component={LogIn}/>
      <Route path={PRICING} component={Pricing}/>
      <Route path={SIGNUP} component={SignUp}/>
    </Switch>
  </div>
)

export default Product;