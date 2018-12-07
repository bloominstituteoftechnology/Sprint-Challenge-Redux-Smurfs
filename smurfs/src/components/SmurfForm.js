import React from "react";
// // import styled from "styled-components";
// import styled from "styled-components";

export default class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ name: "", age: "", height: "" });
  };
  render() {
    return (
      <form onSubmit={this.submit}>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          name="age"
          type="number"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        />
        <input
          name="height"
          type="number"
          value={this.state.height}
          onChange={this.handleChange}
          placeholder="height"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
