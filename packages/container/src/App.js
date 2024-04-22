import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));


export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <>
      <Header onSignOut={()=>setIsSignedIn(false)} isSignedIn={isSignedIn} />
      <Suspense fallback={<Progress />} >
        <Switch>
          <Route path='/auth' >
            <AuthLazy onSignIn = {() => setIsSignedIn(true)} />
          </Route>
          <Route path='/' component={MarketingLazy} />
        </Switch>
      </Suspense>
    </>
  );
}