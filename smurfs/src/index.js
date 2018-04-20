// Pull in all dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Grab data from file paths
import './index.css';
import App from './components/App';
import { smurfsReducer } from './reducers';

const store = createStore(
  () => {}, // this is the most basic reducer. Replace it.
  applyMiddleware(/* be sure to throw in the proper middlewares here*/)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

