import React, { Component } from 'react';
import './App.css';
import CreateSmurfsForm from './CreateSmurfForm';
import Smurfs from './Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='App-header'><span>Soothing &amp; Smooth Smurf Sofware</span></div>
        <Smurfs />
        <CreateSmurfsForm />
      </div>
    );
  }
}

export default App;
