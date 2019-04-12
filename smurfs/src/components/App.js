import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions/index';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
     <h1>HI!</h1>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addingSmurf: state.addingSmurf,
    postSuccessMessage: state.postSuccessMessage,
    postError: state.postError
  }
}

export default connect(mapStateToProps,
  {getSmurfs}) (App);
