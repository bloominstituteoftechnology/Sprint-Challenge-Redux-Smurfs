import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// const store = createStore(
//   rootReducer, // this is the most basic reducer. Replace it.
//   applyMiddleware(thunk, logger)
// );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer, 
  composeEnhancers(
  applyMiddleware(thunk, logger)
));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
