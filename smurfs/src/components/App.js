import React, { Component } from 'react';
import './App.css';
import SmurfList from './smurfList.js';
import SmurfForm from './smurfForm.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfList />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
