import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getTheData, postTheData } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  };
  componentDidMount() {
    this.props.getTheData();
  }
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
       {this.props.smurfs.map(smurf => {
         return <div>Name: {smurf.name} - Age: {smurf.age} - Height: {smurf.height}</div>
       })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pending: state.pending,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getTheData, postTheData }
)(App);
