import React, { Component } from "react";
import "./App.css";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { getSmurfs, addSmurf } from "../actions";
import { connect } from "react-redux";

import Smurfs from "./Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({ ...this.state });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <form onSubmit={this.addSmurf}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInput}
            placeholder="Enter Name"
            required
          />
          <input
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleInput}
            placeholder="Enter Age"
            required
          />
          <input
            type="text"
            name="height"
            value={this.state.height}
            onChange={this.handleInput}
            placeholder="Enter Height"
            required
          />
          <button type="submit">Add Smurf</button>
        </form>
        <Smurfs smurfs={this.props.smurfs} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error,
    fetchingSmurfs: state.fetchingSmurfs,
    addSmurf: state.addSmurf
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
