import React, { Component } from 'react';
import './App.css';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>The Smurfs</h1>
        <div>Add or delete a Smurf in the village!</div>
        <SmurfForm />
        <SmurfsList />
      </div>
    );
  }
}

export default App;