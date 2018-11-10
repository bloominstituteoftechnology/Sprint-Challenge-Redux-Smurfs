import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import AddSmurf from '../containers/AddSmurf';
import UpdateSmurf from '../containers/UpdateSmurf';
import Smurfs from '../containers/Smurfs';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/">Smurfs</NavLink>
        <NavLink to="/add">Add Smurf</NavLink>
        <Route path="/add" component={AddSmurf} />
        <Route path="/update/:id" component={UpdateSmurf} />
        <Smurfs />
      </div>
    );
  }
}

export default App;
