import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

import Form from './Form';
import SmurfList from './SmurfsList';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Form />
        {this.props.fetchingSmurfs ? (
          <div>Loading...</div>
        ) : (
          <SmurfList smurfs={this.props.smurfs} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
    // state: state
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
