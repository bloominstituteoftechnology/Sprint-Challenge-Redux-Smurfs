import React, { Component } from 'react';
import './App.css';
import Smurfs from './Smurfs';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {/* <CreateSmurf /> */}
        <Smurfs />
      </div>
    );
  }
}

export default App;
