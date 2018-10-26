import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Smurfs from './components/smurfs';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger),
);

ReactDOM.render(
  <Provider store={store}>
    <Smurfs />
  </Provider>,
  document.getElementById('root')
);
