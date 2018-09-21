import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { connect } from "react-redux";
import { getSmurfsData } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Smurfs App!</h1>
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    fetchedSmurfs: state.fetchedSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfsData }
)(App);
