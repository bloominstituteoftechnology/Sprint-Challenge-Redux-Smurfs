import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import * as actions from './actions';

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  reducer, // this is the most basic reducer. A function that returns an object. Replace it.
  applyMiddleware(thunk, logger),
);

store.dispatch(actions.fetchSmurfs());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
