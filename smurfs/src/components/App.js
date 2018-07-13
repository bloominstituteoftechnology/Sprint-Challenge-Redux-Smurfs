import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf } from "../actions/index";
import Smurf from "./Smurf";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  componentDidMount() {
    this.props.getSmurfs("http://localhost:3333/smurfs");
  }
  inputSmurf = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  addSmurf = event => {
    event.preventDefault();
    let newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        {this.props.smurfs.map(smurf => {
          return <Smurf smurf={smurf} />;
        })}
        <form>
          <input
            onChange={this.inputSmurf}
            value={this.state.name}
            name="name"
            placeholder="Add name"
          />
          <input
            onChange={this.inputSmurf}
            value={this.state.age}
            name="age"
            placeholder="Add age"
          />
          <input
            onChange={this.inputSmurf}
            value={this.state.height}
            name="height"
            placeholder="Add height"
          />
          <button onClick={this.addSmurf}>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
