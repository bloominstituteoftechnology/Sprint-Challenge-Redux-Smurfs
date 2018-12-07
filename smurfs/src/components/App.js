import React, { Component } from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import SmurfFourm from "./SmurfFourm";
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className="App">
        <Smurfs {...this.props} />
        <SmurfFourm {...this.props} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    smurfs: state.smurfs,
    gettingSmurfs: state.gettingSmurfs,
    addingSmurf: state.addingSmurf,
    updatingSmurf: state.updatingSmurf,
    deletingSmurf: state.deletingSmurf,
    error: state.error
  };
}
export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
