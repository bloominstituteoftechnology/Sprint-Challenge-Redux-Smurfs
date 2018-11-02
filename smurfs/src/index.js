import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, IndexRoute, Route } from 'react-router-dom';
import rootReducer from './reducers';
import SelectedSmurf from './components/SelectedSmurf';
import Smurfs from './components/Smurfs';


const store = createStore(
  rootReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path='/'component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
