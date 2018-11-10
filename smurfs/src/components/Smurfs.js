import React, { Component } from "react";
import "./App.css";
import SelectedSmurf from "./SelectedSmurf";
import { connect } from "react-redux";
import { updateSingleSmurf } from "../actions";


 class Smurfs extends Component {
  handleShowSmurf = smurf => {
    this.props.updateSingleSmurf(smurf);
  };
   render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li onClick={() => this.handleShowSmurf(smurf)}>
                Click to view: {smurf.name}
              </li>
            );
          })}
        </ul>
        {Object.keys(this.props.smurfSelected).length > 0 ? (
          <SelectedSmurf
            selected={this.props.smurfSelected}
            handleShowSmurf={this.handleShowSmurf}
          />
        ) : null}
      </div>
    );
  }
}
 const mapStateToProps = state => {
  return {
    error: state.smurfsReducer.error,
    smurfSelected: state.singleSmurfReducer.smurfSelected
  };
};
 export default connect(
  mapStateToProps,
  {
    updateSingleSmurf
  }
)(Smurfs);