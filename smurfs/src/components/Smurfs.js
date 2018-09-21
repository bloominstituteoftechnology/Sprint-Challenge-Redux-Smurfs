import React, { Component } from "react";
// import './App.css';
import SelectedSmurf from "./SelectedSmurf";
// import { connect } from 'react-redux';

class Smurfs extends Component {
  handleShowSmurf = smurf => {
    this.props.updateSingleSmurf(smurf);
  };

  render() {
    return (
      <div className="Smurf-List">
        {/* <h1>My Smurfs</h1> */}
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <div onClick={() => this.handleShowSmurf(smurf)} key={smurf.id}>
                {smurf.name}, {smurf.age}, {smurf.height};
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Smurfs;
