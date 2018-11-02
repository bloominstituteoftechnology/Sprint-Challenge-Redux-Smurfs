import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import smurfReducer from './reducers';

const store = createStore(
  smurfReducer, // this is the most basic reducer. A function that returns and object. Replace it.
  applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/'component={App} />
      {/* <Route path='/:postId' component={SelectedSmurf} />   */}
      {/* <Route path='/add_smurf' component={SmurfForm} /> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);
