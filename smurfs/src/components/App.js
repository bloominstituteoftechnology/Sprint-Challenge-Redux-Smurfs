import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import Smurfs from './Smurfs';
import './App.css';
import { getSmurfs } from '../actions';
import AddNewSmurf from './AddNewSmurf';

class App extends Component {
  componentDidMount(){
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to The Smurfs</h1>
        <Smurfs {...this.props} /> 
        <AddNewSmurf />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: false,
    fetchedSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurfs: false,
    error: null
  }
} 
export default connect(mapStateToProps, { getSmurfs })(App);
