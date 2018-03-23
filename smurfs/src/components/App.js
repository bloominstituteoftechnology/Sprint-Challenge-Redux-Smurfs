import React, { Component } from 'react';
import './App.css';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
          <SmurfList/>
          <SmurfForm/>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
