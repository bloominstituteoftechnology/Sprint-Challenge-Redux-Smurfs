import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';

import SmurfFormView from './views/SmurfFormView';
import SmurfListView from './views/SmurfListView';
import SmurfView from './views/SmurfView';
class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <NavLink to='/'>Home</NavLink>
        <br></br>
        <NavLink to='/add-smurf'>Add Smurf</NavLink>
      </nav>
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
