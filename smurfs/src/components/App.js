import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfsData, addNewSmurf, deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  componentDidMount() {
    console.log("component did mount!");
    this.props.getSmurfsData();
  }
  render() {
    return (
      <div className="App">
        <div className="background-image">
          <h1>Welcome to the Smurfs Village!</h1>
          {/* <Link className="form-link" to="/smurf-form">
              Add a Smurf!
            </Link> */}

          <SmurfForm addNewSmurf={this.props.addNewSmurf} />
          <Smurfs
            smurfs={this.props.smurfs}
            deleteSmurf={this.props.deleteSmurf}
          />
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
    fetchedSmurfs: state.fetchedSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfsData, addNewSmurf, deleteSmurf }
)(App);
