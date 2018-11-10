import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom'

/* You need some sort of reducer */

const store = createStore(
  rootReducer,                //() => {}, this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk)     /* be sure to throw in the proper middlewares here*/
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
