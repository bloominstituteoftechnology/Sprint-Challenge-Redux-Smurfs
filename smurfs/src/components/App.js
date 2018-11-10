import React, { Component } from 'react';
import './App.css';

import SmurfsList from './SmurfsList';
import CreateSmurf from './CreateSmurf';
import UpdateSmurf from './UpdateSmurf';

import { Route, NavLink } from 'react-router-dom'
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>

        <NavLink to="/create"> Create Smurf! </NavLink>
        <Route path="/create" component={CreateSmurf} />
        <Route path="/update/:id" component={UpdateSmurf} />
        
        {/* <CreateSmurf /> */}
        <SmurfsList /> 
      </div>
    );
  }
}

export default App;
