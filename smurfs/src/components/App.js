import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SmurfsList from './SmurfsList';
import AddSmurfForm from './AddSmurfForm';
import UpdateSmurfForm from './UpdateSmurfForm';
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div className="smurf-village">
          <AddSmurfForm />
          <SmurfsList />
        </div>
        <Route path="/:id" component={UpdateSmurfForm} />
      </div>
    );
  }
}

export default App;
