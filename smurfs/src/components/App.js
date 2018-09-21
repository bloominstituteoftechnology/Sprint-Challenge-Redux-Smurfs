import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs } from "../actions";
import SmurfForm from "./SmurfForm";
import Smurfs from "./Smurfs";
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
        <header className="App-header">
          <h1 className="Smurfs-Title">{`My Redux Smurfs`}</h1>
          <SmurfForm />
        </header>
        {this.props.error ? <h3>Error-No Smurfs Coming</h3> : null}
        <div className="Smurf-Container">
          {this.props.gettingSmurfs ? (
            <div className="Loading-Smurfs">Please Wait</div>
          ) : (
            <Smurfs smurfs={this.props.smurfs} />
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { smurfsReducer } = state;
  return {
    smurfs: smurfsReducer.smurfs,
    gettingSmurfs: smurfsReducer.gettingSmurfs,
    error: smurfsReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs }
)(App);
