import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { logger } from './store/middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { smurfsReducer } from './store/reducers';

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(smurfsReducer, compose(applyMiddleware(thunk, logger)), reduxDevToolsHook);
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
