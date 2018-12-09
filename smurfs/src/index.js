import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer, { CHANGE_TITLE } from './reducers';

const store = createStore(
  reducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger)
);

store.subscribe(() => console.log(store.getState()));

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>,
  rootElement
);
