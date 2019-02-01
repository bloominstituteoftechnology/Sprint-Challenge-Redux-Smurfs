import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

import SmurfList from "./SmurfList";
import SmurfForm from "./SmurfForm";
import EditSmurfForm from "./EditSmurfForm";
import { getSmurfs, addSmurf } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    if (this.props.isFetching || !this.props.smurfs) {
      return <div className="loading-text"><p>Smurfing Smurfs...</p></div>;
    }

    return (
      <div className="App">
        <container className="smurf-container">
        <h1>Welcome to our Smurf Village. Be one of us!</h1>
        <p>Scroll down to visit us!</p>
        <SmurfList {...this.props} />
        </container>
        <br />
        <br />
        <container className="form-container">
        <SmurfForm />
        <br/>
        <EditSmurfForm />
        </container>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    isAdding: state.isAdding,
    error: state.error
  };
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
