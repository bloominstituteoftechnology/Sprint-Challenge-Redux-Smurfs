import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { getSmurfs } from "../actions/";
import Smurfs from "./Smurfs";
import AddSmurfForm from "./AddSmurfForm";
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
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs />
        <AddSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  updatingSmurf: state.updatingSmurf,
  deletingSmurf: state.deletingSmurf,
  error: null
});

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
