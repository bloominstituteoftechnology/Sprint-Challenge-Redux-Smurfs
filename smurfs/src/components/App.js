import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions/index';
import Smurfs from './Smurfs';

import './App.css';
import NewSmurfForm from './NewSmurfForm';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.fetchingSmurfs) {
      return <h2>Fetching smurfs...</h2>
    }
    return (
      <div>
        <NewSmurfForm />
        <Smurfs />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
