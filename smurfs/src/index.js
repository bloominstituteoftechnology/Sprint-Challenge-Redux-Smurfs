import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { smurfsReducer } from './reducers';

import { BrowserRouter } from 'react-router-dom'

const store = createStore(smurfsReducer, compose(applyMiddleware(thunk, logger)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <App anyprop={{a:1}}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
