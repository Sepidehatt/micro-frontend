import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
})

ReactDOM.render(
  <StylesProvider generateClassName={generateClassName}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StylesProvider>,
  document.querySelector('#root')
);