import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from "../actions";

class App extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleInputChanger = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    this.props.postSmurfs({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <div>
          <input
          onChange={this.handleInputChanger}
          name="name"
          type="text"
          value={this.state.name}
          placeholder="Name" 
          />
          <input
          onChange={this.handleInputChanger}
          name="age"
          type="text"
          value={this.state.age}
          placeholder="Age" 
          />
          <input
          onChange={this.handleInputChanger}
          name="height"
          type="text"
          value={this.state.height}
          placeholder="Height" 
          />
          <button onClick={this.handleSubmit}>Create New Smurf</button>
        </div>
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
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    postingSmurfs: state.postingSmurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, postSmurfs }
)(App);
