import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import Root from '../src/components/Root.js'

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
