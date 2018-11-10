import React from 'react';
import './App.css';

// Components:
import Smurfs from './Smufs';
import AddSmurf from './AddSmurf';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

// Switched to function, don't need redux or state in here.
const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>The Smurfiest of Smurfs!</div>
      <Smurfs />
      <AddSmurf />
    </div>
  );
}

export default App;
