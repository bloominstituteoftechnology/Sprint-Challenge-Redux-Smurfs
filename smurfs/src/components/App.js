/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import "./App.css";

import { fetchSmurfs } from "../actions";
import { addNewSmurf } from "../actions";
import { deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        {this.props.fetchingSmurfs ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <div className="smurf-village-wrapper">
            <h1>Welcome to Smurf Village!</h1>
            <SmurfForm {...this.state} />
            <h2>Smurf Residents:</h2>
            <Smurfs {...this.props} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    smurfAdded: state.smurfAdded,
    deletedSmurf: state.deletedSmurf,

    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    /* actions go here */
    fetchSmurfs,
    addNewSmurf,
    deleteSmurf
  }
)(App);
