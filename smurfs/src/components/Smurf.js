import React, { Component} from "react";
import {connect } from "react-redux";
import {deleteSmurf } from ".//actions/index";

class Smurf extends Component {
  render() {
    return (
      <div className="App">
        <div className="smurf-box">
          <h3>Name:{this.props.name}</h3>
          <p>Age:{this.props.age} smurfs years old</p>
          <p>Height:{this.props.height} tall</p>
          <br />
          <button 
            className="delete-btn"
            onClick= {e => {
              this.props.deleteSmurf(this.props.id);
            }}> Delete Smurf </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.deleteSmurf
  };
};

export default connect(
  mapStateToProps,
  {deleteSmurf}
  )(Smurf)