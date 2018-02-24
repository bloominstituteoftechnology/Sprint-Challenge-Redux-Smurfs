// C - addSmurf
// R - getSmurfs
// U - updateSmurf
// D - deleteSmurf

import React, { Component } from 'react';
import './App.css';
import SelectedSmurf from './SelectedSmurf';
import { connect } from 'react-redux';
import { deleteSmurf, updateSmurf, toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './UpdateSmurfForm';

class Smurfs extends Component {
  handleDeleteSmurf = () => {
    const { id } = this.props.smurfSelected;
    this.props.deleteSmurf(id);
  };

  handleShowSmurf = friend => {
    this.props.updateSmurf(smurf);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li onClick={() => this.handleShowsmurf(smurf)} key={smurf.id}>
                {smurf.name}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.smurfSelected).length > 0 ? (
          <SelectedSmurf
            handleShowSmurf={this.handleShowSmurf}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteSmurf={this.handleDeleteSmurf}
            selected={this.props.smurfSelected}
          />
        ) : null}
        {this.props.showUpdate ? (
          <UpdateSmurfForm smurf={this.props.smurfSelected} />
        ) : null}
        {this.props.deletingSmurf ? (
          <button>Test</button>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingSmurf: state.rootReducer.deletingSmurf,
    error: state.rootReducer.error,
    showUpdate: state.singleRootReducer.showUpdate,
    friendSelected: state.singleRootReducer.smurfSelected
  };
};

export default connect(mapStateToProps, {
  deleteSmurf,
  updateSingleSmurf,
  toggleShowUpdate
})(Smurfs);
