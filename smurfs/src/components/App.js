import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import {loadSmurfs} from '../actions';

class App extends Component {
  componentDidMount() {
    this.props.loadSmurfs();
  }
  render() {
    return (
      <div className="App">
        <header>

          <h1 className="header">SMURFS 2.0 W/ Redux</h1>
          <h4 className="title">Welcome to my Redux version of Smurfs!</h4>
          <SmurfForm />
          <Smurfs />
        </header>
        {this.props.error ? <h3>Error loading Smurfs</h3> : null}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetching: state.loadingSmurfs,
    error: state.error
  }
};

export default connect(mapStateToProps, {loadSmurfs})(App);