import React, { Component } from 'react';
import './App.css';

import { Route, NavLink } from 'react-router-dom'

import './App.css';
import Village from './Village'
import AddSmurf from './addSmurf'
import UpdateSmurf from './updateSmurf'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/add">Add a Smurf</NavLink>

        <Route path="/add" component={AddSmurf} />
        <Route path="/update/:id" component={UpdateSmurf} />

        <h1>Welcome to Smurf Village!</h1>
        <Village />
      </div>
    );
  }
}

export default App;
