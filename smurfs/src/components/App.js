import React, { Component } from 'react';
import { connect } from 'react-redux';
import SmurfsList from './SmurfsList';
import SmurfForm from './SmurfForm';
import { getSmurfs } from '../actions';
import './App.css';

class App extends Component {
  componentDidMount() {
      this.props.getSmurfs();
  }


  render() {
    return (
      <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <h3>{this.props.error ? 'Server error' : null}</h3>
      <h2>{(this.props.gettingSmurfs || this.props.creatingSmurf) ? 'Please wait...' : null}</h2>
      <SmurfsList smurfs={this.props.smurfs} />
      <SmurfForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs.smurfs,
    gettingSmurfs: state.smurfs.gettingSmurfs,
    creatingSmurf: state.smurfs.creatingSmurf,
    error: state.smurfs.error,
  };
}

export default connect(mapStateToProps, { getSmurfs })(App);