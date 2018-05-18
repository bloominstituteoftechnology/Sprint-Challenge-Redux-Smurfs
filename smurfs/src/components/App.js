import React, { Component } from 'react';
import Header from './Header/Header';
import SmurfList from './SmurfList/SmurfList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Smurf Village"/>
        <SmurfList />
      </div>
    );
  }
}

export default App;
