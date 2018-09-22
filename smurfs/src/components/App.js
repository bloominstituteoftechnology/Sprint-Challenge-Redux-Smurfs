import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, addSmurf, deleteSmurf } from '../actions';

import Smurfs from '../components/Smurfs';
import SmurfForm from '../components/SmurfForm';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf List</h1>
        <div>
            <Smurfs />
            <SmurfForm />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf, deleteSmurf })(App);