import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';
import AuthApp from './components/AuthApp';

export default () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path='/auth' component={AuthApp} />
        <Route path='/' component={MarketingApp} />
      </Switch>
      <MarketingApp />
    </>
  );
}