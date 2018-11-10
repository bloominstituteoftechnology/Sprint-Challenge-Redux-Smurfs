import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import rootReducer from './reducers';

const middleware = applyMiddleware(logger, thunk)

const store = createStore(rootReducer, middleware)

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
  </Router>,
  document.getElementById('root')
);
