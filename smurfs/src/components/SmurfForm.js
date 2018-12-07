import React from "react";

export default class SmurfForm extends React.Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="name"
        />
        <input
          name="age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="age"
        />
        <input
          name="height"
          type="number"
          value={this.state.height}
          onChange={this.handleChange}
          placeholder="age"
        />
      </form>
    );
  }
}
