import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Smurfs from './components/smurfs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ rootReducer from './reducers';

const store = createStore(
  rootReducer, // this is the most basic reducer. A function that returns an object. Replace it.
  applyMiddleware(/* be sure to throw in the proper middlewares here*/thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Smurfs />
  </Provider>,
  document.getElementById('root')
);
