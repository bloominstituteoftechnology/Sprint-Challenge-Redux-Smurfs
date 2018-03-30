import React, { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import { getSmurfs, postSmurfs } from "../actions";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I connect my components to redux?`
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

  handleSubmit = event => {
    event.preventDefault();
    this.props.postSmurfs({
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height
    });
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

      handleChange = event => {
        this.setState({ id: event.target.value });
      }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <form>
          <input
            name="name"
            onChange={this.handleChange}
            placeholder="name"
            value={this.state.name}
          />
          <input
            name="age"
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
          />
          <input
            name="height"
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
          />
          <button onClick={this.handleSubmit} type="submit">
            Create Smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs, postSmurfs })(App);
