import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import smurfReducer from './reducers';

//create a rootReducer in reducers/index using combine reducers
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(smurfReducer, /* preloadedState, */ composeEnhancers(
 applyMiddleware(thunk, logger)
));


ReactDOM.render(
<Provider store = {store}>
 <App />
</Provider>,
 document.getElementById('root'));
registerServiceWorker();
