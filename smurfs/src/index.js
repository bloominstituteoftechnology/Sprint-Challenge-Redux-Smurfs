import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import SmurfsForm from './components/smurfForm';

const middleware = applyMiddleware(logger, thunk)
const store = createStore(rootReducer , middleware);

ReactDOM.render(
  <Provider store={store}>
    <SmurfsForm />    
  </Provider>,
  document.getElementById('root')
);
