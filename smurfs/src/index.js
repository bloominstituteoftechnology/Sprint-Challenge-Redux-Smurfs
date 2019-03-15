import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
