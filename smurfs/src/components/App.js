import React, { Component } from 'react';
import './App.css';
import {Route, NavLink } from 'react-router-dom'
import SmurfList from './SmurfList'
import AddSmurf from './AddSmurf'
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
        <h1>Smurf App (Redux)</h1>
        <div>Smurf Members</div>
        <NavLink to='/'> Home <br/> </NavLink>
        <NavLink to='/add'>Add A Smurf</NavLink>{''}
        <SmurfList />
        <Route path='/add' component={AddSmurf} />
      </div>
    );
  }
}

export default App;