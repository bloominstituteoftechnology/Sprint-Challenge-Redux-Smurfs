import React, { Component } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

class NewSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.age}
          name="age"
          type="number"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.height}
          name="height"
          type="text"
          placeholder="height"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
        New Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    addingSmurf: state.addingSmurf
  };
};

export default connect(
  mapStateToProps,
  {createSmurf}
)(NewSmurf);
