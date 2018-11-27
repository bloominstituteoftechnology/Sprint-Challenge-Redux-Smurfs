import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNewSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.addNewSmurf}>
        <input
          onChange={this.inputHandler}
          name="name"
          type="text"
          value={this.state.name}
          placeholder="...name"
        />
        <input
          onChange={this.inputHandler}
          name="age"
          type="number"
          value={this.state.age}
          placeholder="...age"
        />
        <input
          onChange={this.inputHandler}
          name="height"
          type="text"
          value={this.state.height}
          placeholder="...height"
        />
        <button type="submit">Add Smurf</button>
      </form>
    );
  }
}

export default connect('',
  { addSmurf }
)(AddSmurfForm);
