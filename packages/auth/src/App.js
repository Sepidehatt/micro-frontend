import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

export default ({ onSignIn }) => {
  return (
    <>
      <Switch>
        <Route path='/auth/signin' >
          <SignIn onSignIn={onSignIn} />
        </Route>
        <Route path='/auth/signup' >
          <SignUp nSignIn={onSignIn} />
        </Route>
      </Switch>
    </>
  );
};