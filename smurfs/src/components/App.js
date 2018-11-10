import React, { Component } from 'react';
import {connect} from 'react-redux'

import './App.css';
import {getSmurfs} from '../actions/smurfActions'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        SMURF APP
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,

  }
}

export default connect(mapStateToProps, {getSmurfs})(App);
