import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from '../actions';
import { connect } from 'react-redux';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <SmurfForm {...this.state} />
        <Smurfs {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    smurfFetch: state.smurfFetch,
    smurfAdded: state.smurfAdded,
    error: state.error
  }
};

export default connect(mapStateToProps, { getSmurfs })(App);
