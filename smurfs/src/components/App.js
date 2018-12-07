import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import {
  fetchSmurfs
} from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
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
      </div>
    );
  }
}

export default connect(
  state => state,
  {
    fetchSmurfs,
  }
)(App);
