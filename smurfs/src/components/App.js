import React, { Component } from "react";
import { connect } from "react-redux";
// import logo from "../logo.svg";
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
          <div className="smurf-village-wrapper">
            <h1>Smurf Village</h1>
            <SmurfForm />
            <Smurfs {...this.props} />
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs,
    addNewSmurf,
    deleteSmurf
  }
)(App);