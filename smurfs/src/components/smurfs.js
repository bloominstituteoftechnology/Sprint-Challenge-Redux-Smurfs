import React, { Component } from 'react';
import './App.css';
import logo from '../logo.svg';
import SelectedSmurf from './selectedSmurf';
import { connect } from 'react-redux';
import { deleteSmurf, updateSingleSmurf, toggleShowUpdate } from '../actions';
import UpdateSmurfForm from './updateSmurfForm';

class Smurfs extends Component {
  handleDeleteSmurf = () => {
    const { id } = this.props.smurfSelected;
    this.props.deleteSmurf(id);
  };

  handleShowSmurf = smurf => {
    this.props.updateSingleSmurf(smurf);
  };

  toggleShowUpdate = () => {
    this.props.toggleShowUpdate();
  };
  render() {
    return (
      <div className="Smurf-Container">
        <ul className="Smurf-List">
          {this.props.smurfs.map(smurf => {
            return (
              <li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                {smurf.name}
              </li>
            );
          })}
        </ul><div  className="selected-container">
        {Object.keys(this.props.smurfSelected).length > 0 ? (
          <SelectedSmurf
            handleShowSmurf={this.handleShowSmurf}
            toggleShowUpdate={this.toggleShowUpdate}
            handleDeleteSmurf={this.handleDeleteSmurf}
            selected={this.props.smurfSelected}
          />
        ) : null}</div>
        {this.props.showUpdate ? (
          <UpdateSmurfForm smurf={this.props.smurfSelected} />
        ) : null}
        {this.props.deletingSmurf ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deletingSmurf: state.smurfsReducer.deletingSmurf,
    error: state.smurfsReducer.error,
    showUpdate: state.singleSmurfReducer.showUpdate,
    smurfSelected: state.singleSmurfReducer.smurfSelected
  };
};

export default connect(mapStateToProps, {
  deleteSmurf,
  updateSingleSmurf,
  toggleShowUpdate
})(Smurfs);