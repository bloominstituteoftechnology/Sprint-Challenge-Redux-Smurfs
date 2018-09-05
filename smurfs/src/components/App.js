import React, { Component } from 'react';

import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
