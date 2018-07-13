import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { fetchData, addData } from '../actions';
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
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('MSP STATE: ', state);
  return {
    fetchingSmurfs: state.fetchingSmurfs,
    fetchedSmurfs: state.fetchedSmurfs,
    addingSmurf: state.addingSmurf,
    smurfs: state.smurfs,
    error: state.error
  }
}

export default connect(mapStateToProps, {
  fetchData, addData
})(App);
