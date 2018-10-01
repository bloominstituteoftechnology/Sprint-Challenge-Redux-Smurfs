import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import {smurfReducer} from  './reducers';

const allMiddlewares = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
const store = createStore(smurfReducer, allMiddlewares);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
