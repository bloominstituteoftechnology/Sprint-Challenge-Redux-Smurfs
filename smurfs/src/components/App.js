import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import SmurfList from './SmurfList';
import './App.css';
import SmurfForm from './SmurfForm';
import UpdateSmurf from './UpdateSmurf';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
const App = props => {
  return (
    <div className="App">
      <NavLink to='/SmurfForm'>Create a New Smurf</NavLink>
      <Route path='/SmurfForm'  component={SmurfForm} />
      <Route path='/update/:id' component={UpdateSmurf} />

      <h1>SMURFS! 2.0 W/ Redux</h1>
      <SmurfList />
    </div>
  );
}

export default App;
