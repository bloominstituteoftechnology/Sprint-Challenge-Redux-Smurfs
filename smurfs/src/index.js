import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import SmurfsReducer from './reducers/smurfsReducer';

import './index.css';
import App from './components/App';
/* You need some sort of reducer */;

const middleware = applyMiddleware(thunk, logger)
// const store = createStore(
//   () => {}, // this is the most basic reducer. A function that returns and object. Replace it.
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/)
// );
const store = createStore(SmurfsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById('root')
  );
  
  // Router is optional and not used see margin notes to implement read margin note below
{/* ☞ 2e2236a9-cd75-4658-a3c6-9119bf083e84 */}