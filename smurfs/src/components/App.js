import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from '../actions';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
    state = {
      name: '',
      age: '',
      height: ''
    }
  render() {
    return (
      <div className="App">
        REDUX WORKING
      </div>
    );
  }
}

// created the mapStateToProps function
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  }
}

// exported withRouter and connect using the mapStateToProps function
export default withRouter(connect(mapStateToProps, { getSmurfs, addSmurf })(App));
