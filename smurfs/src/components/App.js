import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, addSmurf, updateSmurf, deleteSmurf, error } from '../actions'
import './App.css';
import {Smurfs} from './Smurfs'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }


  render() {
    console.log('smurfs', this.props.state)
    return (
      <div className="App">
      <Smurfs props={this.props.state} />
    </div>
    )}
}


const mapStateToProps = (state) => {
  return {
  state: state.smurfs.data,
  }
}


export default connect(mapStateToProps, {getSmurfs, addSmurf, updateSmurf, deleteSmurf, error})(App)
