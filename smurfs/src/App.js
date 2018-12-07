import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router';

import SmurfFormView from './views/SmurfFormView';
import SmurfListView from './views/SmurfListView';
import SmurfView from './views/SmurfView';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route 
          exact 
          path='/'
          component={SmurfListView}
        />
        <Route 
          path='/add-smurf'
          component={SmurfFormView}
        />
        <Route 
          exact 
          path='/smurf/:smurfId'
          component={SmurfView}
        />
      </div>
    );
  }
}

export default App;
