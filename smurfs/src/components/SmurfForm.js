import React, { Component } from "react";

export default class SmurfForm extends Component {
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
      <div className="form-card">
        <h2>{this.props.update ? `Edit Smurf` : "Add Smurf"}</h2>
        <form onSubmit={this.submit}>
          {this.props.update && (
            <input name="id" value={this.state.id} placeholder="ID" />
          )}
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
            value={this.state.height}
            onChange={this.handleChange}
            placeholder="height"
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}
