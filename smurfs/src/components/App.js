import React, { Component } from 'react';
import './App.css';
import SmurfsForm from './SmurfsForm/SmurfsForms';
import Smurfs from './Smurfs/Smurfs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <SmurfsForm />
        <Smurfs />
      </div>
    );
  }
}

export default (App);
