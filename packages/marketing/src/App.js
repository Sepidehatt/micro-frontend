import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

export default () => {
  return (
  <>
    <Switch>
      <Route exact path='/pricing' component={Pricing}/>
      <Route path='/' component={Landing}/>
    </Switch>
  </>
  );
};