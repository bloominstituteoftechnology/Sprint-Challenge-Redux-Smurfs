import React, { Component } from 'react';

import './App.css';
import SmurfsView from './view/SmurfsView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SmurfsView />
      </div>
    );
  }
}

export default App;
