import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
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
        {this.props.fetchingSmurfs ? (
          <div> Gathering All Your Smurfs </div>
        ) : (
          <div>
            {this.props.smurfs.map(smurfs => {
              return (
                <li key={smurfs.index}>
                  Name: {smurfs.name}, <br />
                  Age: {smurfs.age}, <br />
                  Height: {smurfs.height}, <br />
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
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {
    fetchSmurfs
  }
)(App);
