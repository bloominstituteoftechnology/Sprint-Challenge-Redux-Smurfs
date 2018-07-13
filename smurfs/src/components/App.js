import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { fetchSmurfs } from "../actions";
import SmurfsForm from "./Form";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {/* <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div> */}
        {this.props.fetchingSmurfs ? (
          <div> fetching Smurfs </div>
        ) : (
          <div>
            {this.props.smurfs.map(smurfs => {
              return (
                <li key={smurfs.name}>
                  Name: {smurfs.name}, <br />
                  Age: {smurfs.age}, <br />
                  Height: {smurfs.height} <br />
                </li>
              );
            })}
          </div>
        )}
        <SmurfsForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    // fetchedSmurfs: state.fetchedSmurfs,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App);
