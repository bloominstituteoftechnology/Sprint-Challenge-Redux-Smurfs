import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import smurfReducer from './reducers';

const composeEnhancers =
	typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
				{
					// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
				}
			)
		: compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, logger));
const store = createStore(smurfReducer, enhancer);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
