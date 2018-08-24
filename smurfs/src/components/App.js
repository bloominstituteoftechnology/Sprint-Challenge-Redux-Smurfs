import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from "../actions";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

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
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              Name:
              {smurf.name}
              Age:
              {smurf.age}
              Height:
              {smurf.height}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(mapStateToProps,{getSmurfs, postSmurfs})(App);
