import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider store={createStore(reducer, applyMiddleware(logger, thunk))}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
