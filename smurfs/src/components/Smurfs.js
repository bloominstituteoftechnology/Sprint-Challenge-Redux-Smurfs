import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import Smurf from './Smurf'

class Smurfs extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <li>
                {smurf.name}<br/>
                {smurf.age}<br/>
                {smurf.height}
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

export default Smurfs;