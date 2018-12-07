import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import {
  fetchSmurfs,
  addSmurf,
  deleteSmurf,
  updateSmurf,
  selectSmurf,
} from '../actions';

import SmurfForm from './SmurfForm';
import SmurfList from './SmurfList';


class App extends Component {
  state = {
    update: false,
  }

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
        <SmurfList
          smurfs={this.props.smurfs}
          fetchingSmurfs={this.props.fetchingSmurfs}
          deleteSmurf={this.props.deleteSmurf}
          error={this.props.error}
        />
      </div>
    );
  }
}

export default connect(
  state => state,
  {
    fetchSmurfs,
    addSmurf,
    deleteSmurf,
    updateSmurf,
    selectSmurf,
  }
)(App);
