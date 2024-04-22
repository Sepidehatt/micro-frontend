import React from "react";
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
})
const mount = (el, {onNavigate, defaultHistory, initialPath}) => {
  const history = defaultHistory || createMemoryHistory({
    initialEntries: [initialPath]
  })
  
  if(onNavigate) {
    history.listen(onNavigate);
  }
  
  ReactDOM.render(
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history} >
        <App />
      </Router>
    </StylesProvider>
    ,
    el
  );

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
       
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
    },
  };
};

if(process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if(devRoot) {
    mount(devRoot, {
      defaultHistory: createBrowserHistory()
    });
  }
}

export {mount};


