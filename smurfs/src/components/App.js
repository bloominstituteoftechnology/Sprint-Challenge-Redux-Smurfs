import React, { Component } from 'react';
import './App.css';
import { getSmurf, createSmurf } from '../actions/index';
import { connect } from 'react-redux';
import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SmurfForm />
        <SmurfList />
      </div>
    );
  }
}



export default App;