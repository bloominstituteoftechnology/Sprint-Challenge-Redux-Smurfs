import React, { Component } from 'react';
import './App.css';
import SmurfCard from './SmurfCard';
import SmurfForm from './SmurfForm';
import SmurfsList from './SmurfsList';
import AddSmurfButton from './AddSmurfButton';
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
        <AddSmurfButton />
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
