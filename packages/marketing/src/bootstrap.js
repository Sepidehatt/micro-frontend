import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import App from './App';

const mount = (el) => {
  ReactDOM.render(
    <StylesProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </StylesProvider>
    ,
    el
  );
};

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if(devRoot) {
    mount(devRoot);
  }
}

export {mount};


