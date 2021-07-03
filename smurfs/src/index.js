import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';  // this is the function that will take in reducer/s which will represent our state of application globally
import { Provider } from 'react-redux';  // the provider component provides the application with the store that will contain the state data for the react application
import rootReducer from './reducers'; // reducer

//add reducer and call middleware here
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

// wrap our <App /> with the <Provider> component and pass it a store property set to equal to the createStore function
ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>,
  document.getElementById('root')
);