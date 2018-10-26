import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';

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

  handleUpdateSmurf = ({ id, name, age, height }) => {
    // e.preventDefault();
    this.props.updateSmurf({ id, name, age, height });
  };

  handleDeleteSmurf = id => {
    this.props.deleteSmurf(id);
  };

  render() {
    return (
      <div className="App">
        {this.props.updatingSmurf ? (
          <Form handleUpdateSmurf title="Update Smurf" />
        ) : (
          <Form handleAddSmurf={this.handleAddSmurf} title="Add Smurf" />
        )}
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
    fetchingSmurfs: state.fetchingSmurfs,
    updatingSmurf: state.updatingSmurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);
