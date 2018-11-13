import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import  'tachyons';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ reducer from './reducers';

const store = createStore(
  reducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(logger,thunk/* be sure to throw in the proper middlewares here*/)
);

ReactDOM.render(
  <Provider store={store}>
    <Router><App /></Router>
  </Provider>,
  document.getElementById('root')
);
