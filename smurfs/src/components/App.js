import React, { Component } from 'react';
import Header from './Header/Header';
import SmurfList from './SmurfList/SmurfList';
import smurfLogo from '../assets/the-smurfs-logo.svg.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome to Smurf Village" image={smurfLogo} />
        <SmurfList />
      </div>
    );
  }
}

export default App;
