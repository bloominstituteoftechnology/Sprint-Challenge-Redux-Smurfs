import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';

const thunk = store => next => action => {
  if (typeof action === "function") {
    if (!store.getState().chars.fetching) {
      action(store.dispatch);
    } else {
      console.log("WHAT ARE YOU TRYING TO DO IM ALREADY FETCHING???");
    }
  } else {
    return next(action);
  }
};

const logger = store => next => action => {
  console.group("Redux Action");
  console.log("current state", store.getState());
  console.log("action", action);
  let result = next(action);
  console.log("new state", store.getState());
  console.groupEnd();
  return result;
};


const store = createStore(
  rootReducer, 
  applyMiddleware(thunk,logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
