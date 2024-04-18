import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})
const mount = (el) => {
  ReactDOM.render(
    <StylesProvider generateClassName={generateClassName}>
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


