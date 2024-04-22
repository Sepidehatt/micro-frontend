import React from 'react';
import {Switch, Route} from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default () => {
  return (
  <>
    <Switch>
      <Route path='/auth/signin' component={SignIn} />
      <Route path='/auth/signup' component={SignUp} />
    </Switch>
  </>
  );
};