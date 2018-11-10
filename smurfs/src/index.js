import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>  
  </Provider>,
  document.getElementById('root')
);
