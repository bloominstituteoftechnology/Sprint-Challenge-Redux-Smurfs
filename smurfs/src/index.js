import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import middleware from './middleware';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


// const store = createStore(
//   () => {}, // this is the most basic reducer. Replace it.
//   applyMiddleware(/* be sure to throw in the proper middlewares here*/)
// );

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
