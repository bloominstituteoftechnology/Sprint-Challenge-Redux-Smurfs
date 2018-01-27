import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import App from './components/App';
import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
  /* () => {}, this is the most basic reducer. Replace it.
  rootReducer,
  applyMiddleware( be sure to throw in the proper middlewares here )
); */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
