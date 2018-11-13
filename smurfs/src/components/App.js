import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import SmurfList from './SmurfList';
import CreateSmurf from './Form'

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
        <h1>SMURFS!</h1>
        <div>Here's some Smurfs!</div>
        <Route path="/create" component={CreateSmurf}/>
        <SmurfList/>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
