import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { SmurfReducer } from './reducers/';

// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(thunk, logger)
// );
const composeEnhancers =
typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ })
: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(SmurfReducer, enhancer);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
