import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/';
import { addSmurf } from '../actions/';


class App extends Component {

  
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    if(this.props.fetchingSmurfs){
      return <h4>Loading smurfs...</h4>
    }
    return (
      <div className="App">
        <SmurfForm {...this.props} />
        <Smurfs {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: state.error
});

export default connect(
  mapStateToProps,
  { fetchSmurfs, addSmurf }
)(App);

/*
<SmurfForm {...props} />
<Smurfs {...this.props} />
 */