import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sort of reducer */ './reducers';
import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(
  () => { }, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(logger, thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
