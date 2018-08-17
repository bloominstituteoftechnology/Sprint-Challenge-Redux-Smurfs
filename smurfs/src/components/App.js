import React, { Component } from 'react';
import './App.css';
import SmurfsContainer from './SmurfsContainer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <h2>Welcome to the Smurfs Village!</h2>
        <SmurfsContainer />
      </div>
    );
  }
}

export default App;
