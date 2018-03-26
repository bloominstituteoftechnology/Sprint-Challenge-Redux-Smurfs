import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import "./App.css";

class Smurfs extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <ul>
        {this.props.smurfs.map(smurf => {
          return (
            <li key={smurf.name}>
              Name: {smurf.name} Age: {smurf.age} Height: {smurf.height}
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(Smurfs);
