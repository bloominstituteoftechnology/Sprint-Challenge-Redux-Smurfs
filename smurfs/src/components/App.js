import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import SmurfsList from './smurfsList'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Route exact path='/' component={SmurfsList}/>
      </div>
    );
  }
}

export default App;
