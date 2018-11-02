import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
//import { updateSingleFriend } from "../actions";

class Smurfs extends Component {
  handleShowSmurf = smurf => {
    //this.props.updateSingleSmurf(smurf);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li onClick={() => this.handleShowSmurf(smurf)}>
                {smurf.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
  };
};

export default connect(
  mapStateToProps,
  {
    //updateSingleSmurf
  }
)(Smurfs);
