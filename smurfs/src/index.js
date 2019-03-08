import React        from    'react';
import ReactDOM     from    'react-dom';
import App          from    './components/App';
import thunk        from    'redux-thunk';
import logger       from    'redux-logger';
import { Provider } from    'react-redux';

import { smurfReducer }  from    './reducers';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware       = applyMiddleware  (thunk, logger);
const store            = createStore      (smurfReducer , composeEnhancers (middleware));

ReactDOM.render(
  <Provider store={store}> 
     <App />
  </Provider>,
  document.getElementById('root')
);
