import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import  { rootReducer } from './reducers';

// 1. The general flow of steps will be to create your store, 2. create your reducers, create your containers, and then create the action creators.


const store = createStore(
  rootReducer
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
