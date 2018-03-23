// src/index.js
//think this is ok so far

import React from 'react'; //
import ReactDOM from 'react-dom'; //
import './index.css'; //
import App from './components/App'; //
import thunk from 'redux-thunk'; //
import logger from 'redux-logger';  //
import { createStore, applyMiddleware } from 'redux'; //
import { Provider } from 'react-redux';  //
import rootReducer from'./reducers/rootReducer';


const middleware = applyMiddleware(logger, thunk);
const store = createStore(rootReducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);













