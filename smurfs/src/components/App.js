/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Smurfs from './Smurfs';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';

// for testing in console
window.axios = axios;

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Smurfs smurfs={this.props.smurfs} addSmurf={this.props.addSmurf} deleteSmurf={this.props.deleteSmurf}/>
      </div>
    );
  }
}


function mapStateToProps(state) {
  console.log('state in App.js', state);
  return {
    smurfs: state.smurfs,
    getSmurfs: state.getSmurfs,
    
  };
}

function mapDispatchToProps(dispatch){
  return {
    getSmurfs: () => dispatch(getSmurfs()),
    addSmurf: newSmurf => dispatch(addSmurf(newSmurf)),
    deleteSmurf: smurfId => dispatch(deleteSmurf(smurfId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

