import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {smurfReducer} from  './reducers';

const store = createStore(smurfReducer, applyMiddleware(logger, thunk));
//switch order

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
