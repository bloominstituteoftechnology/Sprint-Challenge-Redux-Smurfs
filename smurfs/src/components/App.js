import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';
import CreateSmurf from './CreateSmurf';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Smurf Village!</h1>
        <CreateSmurf />
        <Smurfs />
      </div>
    );
  }
}

export default App;
