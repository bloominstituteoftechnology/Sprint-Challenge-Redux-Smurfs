import React, { Component } from 'react';

import SmurfList from './SmurfList';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your Redux version of Smurfs!</div>
      <SmurfList />
    </div>
  )
}


export default App;
