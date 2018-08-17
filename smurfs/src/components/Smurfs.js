import React, { Component } from "react";
// import { logo } from "./../logo.svg";
import SelectedSmurf from "./SelectedSmurf";
import { connect } from "react-redux";
// import "./App.css";
import { deleteSmurf, updateSingleSmurf, toggleShowUpdate } from "../actions";
import UpdateSmurfForm from "./UpdateSmurfForm";

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
      <div className="Container">
        <ul className="List">
          {this.props.smurfs.map(smurf => {
            return (
              <li onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
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
        {this.props.deletingSmurf ? <h1>Deleting....</h1> : null}
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

export default connect(
  mapStateToProps,
  { deleteSmurf, updateSingleSmurf, toggleShowUpdate }
)(Smurfs);
