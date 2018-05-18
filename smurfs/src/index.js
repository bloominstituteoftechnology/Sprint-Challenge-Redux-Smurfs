import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import smurfReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//What good is a provider without quatloos?
const quatloo = createStore(smurfReducer, composeEnhancers(
  applyMiddleware(thunk, logger)
));

ReactDOM.render(
  <Provider store={quatloo}>
    <App />
  </Provider>,
  document.getElementById('root')
);
