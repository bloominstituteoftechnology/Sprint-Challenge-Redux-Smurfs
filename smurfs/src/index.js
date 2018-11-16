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

//  this is the most basic reducer. A function that returns and object. Replace it.
// const store = createStore( () => {},applyMiddleware(/* be sure to throw in the proper middlewares here*/));

const middleware = applyMiddleware(thunk, logger)
const store = createStore(SmurfsReducer, middleware);

ReactDOM.render(
  <Provider store={store}>

  {/*  // Router is optional and not used see margin notes to implement read margin note below
   ☞ 2e2236a9-cd75-4658-a3c6-9119bf083e84 */}
    <App />
  </Provider>,
  document.getElementById('root')
  );
  