import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import smurfReducer from  './reducers/index.js';

const store = createStore(smurfReducer, applyMiddleware(logger, thunk));
  // this is the most basic reducer. Replace it.
  /* be sure to throw in the proper middlewares here*/


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
