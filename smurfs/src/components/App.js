import React, { Component } from 'react';
import SmurfView from '../views/SmurfView';
import smurfs from '../assets/Smurf-Family.png'

class App extends Component {
  render() {
    return (
      <div>
        <img src={smurfs}></img>
        <SmurfView></SmurfView>
      </div>
    );
  }
}


export default App;
