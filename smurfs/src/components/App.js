import React, { Component } from 'react';
import { Route, NavLink } from "react-router-dom";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import SingleSmurf from './SingleSmurf'

import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/smurf-form">Form</NavLink>
      </nav>
      <Route
        exact path="/"
        render={properties => <Smurfs {...properties} /> } 
      />
      <Route
        exact path="/smurf-form"
        render={properties => <SmurfForm {...properties} /> } 
      />
      <Route
        exact path="/:id"
        render={properties => <SingleSmurf {...properties} /> } 
      />
      </div>
    );
  }
}

export default App;
