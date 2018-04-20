import React, { Component } from "react";
import { connect } from "react-redux";
import { getSmurfs, createSmurfs } from "../actions/";
import "./App.css";
import CreateSmurfForm from "./CreateSmurfForm";

class App extends Component {
  // fetch data when App mounts
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    // console.log("PROPS: ", this.props);
    return [
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>,
      <CreateSmurfForm />
    ];
  }
}

const mapStateToProps = state => {
  // console.log("state: ", state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    error: state.error,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurfs: state.deletingSmurfs
  };
};

export default connect(mapStateToProps, {
  getSmurfs,
  createSmurfs
})(App);
