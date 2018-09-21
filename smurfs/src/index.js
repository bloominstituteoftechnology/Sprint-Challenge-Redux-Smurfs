// React
import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Reducers
import smurfReducer from './reducers';

// Components
import App from './components/App';

// Styles
import './index.css';

const store = createStore(
	smurfReducer, 
	applyMiddleware(thunk, logger)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
