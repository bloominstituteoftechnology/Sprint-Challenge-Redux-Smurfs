import React, { Component } from "react";

class AddSmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  render() {
    return (
      <form className="addForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          name="name"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Age"
          value={this.state.age}
          name="age"
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Height"
          value={this.state.height}
          name="height"
          onChange={this.handleInput}
        />
        <button type="onSubmit">Save</button>
      </form>
    );
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.save(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
}

export default AddSmurfForm;
