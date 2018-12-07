import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import {
  fetchSmurfs,
  addSmurf,
} from '../actions';

import SmurfForm from './SmurfForm';


class App extends Component {
  componentDidMount() {
    console.log ('mounted');
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Redux - Smurfs</h1>
        <div>Welcome to my Redux version of Smurfs!</div>
        <SmurfForm addSmurf={this.props.addSmurf}/>
      </div>
    );
  }
}

export default connect(
  state => state,
  {
    fetchSmurfs,
    addSmurf,
  }
)(App);
