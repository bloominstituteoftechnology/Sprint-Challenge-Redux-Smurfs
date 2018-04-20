import React from 'react';
import ReactDOM from 'react-dom';
import index.css from './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { getSmurfs } from './reducers';

const store = createStore(
  (get) => {Smurfs}, // this is the most basic reducer. Replace it.
  applyMiddleware(/* be sure to throw in the proper middlewares here*/)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

import { actionType } from './actions'
​
const initialState = {
  
​
function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
​

  return state
}