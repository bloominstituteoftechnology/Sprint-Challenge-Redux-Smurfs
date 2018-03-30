import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancers(applyMiddleware(logger, thunk));
const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));