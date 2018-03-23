import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs } from '../actions';
import Smurfs from './smurfs';
import CreateSmurfForm from './createSmurfForm';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS!</h1>
        <Smurfs/>
        <CreateSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

export default connect(mapStateToProps, { getSmurfs })(App);
