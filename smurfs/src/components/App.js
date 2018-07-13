import React, { Component } from 'react';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
