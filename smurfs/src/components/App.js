import React, { Component } from 'react';
import './App.css';
import SmurfsList from "./SmurfsList";
import AddSmurf from "./AddSmurf";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <AddSmurf />
        <SmurfsList />
      </div>
    );
  }
}

export default App;
