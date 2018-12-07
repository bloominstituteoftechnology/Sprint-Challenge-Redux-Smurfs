import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions";
import Smurf from "./Smurf";
import AddSmurf from "./AddSmurf";
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
    console.log("running render function");
    if (this.props.fetchingSmurfs) {
      return <h2>Hold your horses, we are loading.</h2>;
    }
    return (
      
      this.props.smurfs.map((smurf, id) => (
      <div className="App">
        <AddSmurf />
        <Smurf {...this.props} key={smurf.id} smurf={smurf} />
        
        {/* <h2>{this.props.smurfs[id].name}</h2>
        <p>{this.props.smurfs[id].age}</p>
        <p>{this.props.smurfs[id].height}</p> */}
      </div>
    )))
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
