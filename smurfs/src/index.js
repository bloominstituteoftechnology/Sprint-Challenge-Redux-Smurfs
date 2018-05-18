import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { charsReducer } from  './reducers';

import { BrowserRouter as Router, Route } from "react-router-dom";

const store = createStore(charsReducer, applyMiddleware(thunk,logger));

ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
  document.getElementById('root')
);
