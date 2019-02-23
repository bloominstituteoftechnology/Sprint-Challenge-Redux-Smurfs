import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


import modifyState from './reducers';

const store = createStore(
  modifyState, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
