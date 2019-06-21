import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { fetchSmurfs } from '../actions/actions';
import AddSmurfForm from './AddSmurfForm';

class App extends Component {

  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    let { smurfs, fetching, error } = this.props;
    if (fetching) {
      return <h3>Smurfs are being parachuted.</h3>;
    }
    if (error) {
      return <h3>Smurfs not found. :/</h3>;
    }
    return (
      <div className="App">
        <h3>There are now {smurfs.length} smurfs in the village!</h3>
        <AddSmurfForm />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    smurfs: state.fetchSmurfsRequest.smurfs,
    fetching: state.fetchSmurfsRequest.isFetching,
    error: state.fetchSmurfsRequest.error,
  };
}

export default connect(mapStateToProps, { fetchSmurfs })(App);
