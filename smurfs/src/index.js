import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import /* You need some sore of reducer */ './reducers';
import { append } from './C:/Users/Juarin/AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/vary';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
  () => {}, // this is the most basic reducer. Replace it.
  middleware
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
