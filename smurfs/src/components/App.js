import React, { Component } from 'react';
import './App.css';
import CreateSmurfsForm from './CreateSmurfForm';
import Smurfs from './Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Smurfs />
        <CreateSmurfsForm />
      </div>
    );
  }
}

export default App;
