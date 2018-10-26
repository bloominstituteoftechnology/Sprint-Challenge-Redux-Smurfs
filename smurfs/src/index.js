import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import { smurfReducer } from "./reducers";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(smurfReducer, applyMiddleware(thunk, logger));
  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
