import React from 'react';
import {Switch, Router} from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

export default () => {
  return(
    <>
      <Header />
      <MarketingApp />
    </>
  );
}