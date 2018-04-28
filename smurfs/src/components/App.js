import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getSmurfs, deleteSmurf } from '../actions';
import Smurf from './Smurfs';
import Form from './Form';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <Form />
        {this.props.fetchingSmurfs ? <h1>Fetching Smurfs</h1> : null}
        {this.props.deletingSmurfs ? <h1>Deleting Smurf</h1> : null}
        <Smurf 
          smurfs={this.props.smurfs} 
          delete={this.props.deleteSmurf}
          />
        {this.props.error !== null ? <h1>Error: {this.props.error}</h1> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    deletingSmurfs: state.deletingSmurfs,
    error: state.error,
  }
}

export default connect(mapStateToProps, {getSmurfs, deleteSmurf})(App);
