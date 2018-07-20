import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';  //thunk is imported
import logger from 'redux-logger'; //logger is imported
import { createStore, applyMiddleware } from 'redux'; //other middleware is imported
import { Provider } from 'react-redux'; // Provider is imported
import rootReducer './reducers';

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
