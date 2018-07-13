import React, { Component } from 'react';
import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}

export default App;
