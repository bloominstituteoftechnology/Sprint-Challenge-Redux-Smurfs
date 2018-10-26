import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf } from '../actions';

import Form from './Form';
import SmurfList from './SmurfsList';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  handleAddSmurf = ({ name, age, height }) => {
    // e.preventDefault();
    this.props.addSmurf({ name, age, height });
  };

  handleDeleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        <Form handleAddSmurf={this.handleAddSmurf} />
        {this.props.fetchingSmurfs ? (
          <div>Loading...</div>
        ) : (
          <SmurfList
            smurfs={this.props.smurfs}
            handleDeleteSmurf={this.handleDeleteSmurf}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
