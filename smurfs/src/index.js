import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware,compose } from 'redux';
import { Provider } from 'react-redux';
import {smurfReducer} from './reducers';


const middlewares = compose(
  applyMiddleware(thunk,logger),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)


const store = createStore(
  smurfReducer,
  middlewares
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
