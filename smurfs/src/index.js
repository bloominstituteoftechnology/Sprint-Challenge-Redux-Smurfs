import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import logger from 'redux-logger';
import thunk from 'redux-thunk';


const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
