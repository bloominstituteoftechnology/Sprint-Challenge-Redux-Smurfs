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
    if (this.props.updating) {
      this.props.update(this.state, this.props.id);
    } else {
      this.props.add(this.state);
    }
    this.setState({ name: "", age: "", height: "" });
  };
  render() {
    if (this.props.updating) {
      let smurf = this.props.smurfs.filter(smurf => smurf.id === this.props.id);
      console.log(smurf);
    }
    return (
      <div className="form-card">
        <h2>{this.props.updating ? `Edit Smurf` : "Add Smurf"}</h2>
        <form onSubmit={this.submit}>
          Name:
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
          />
          Age:
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="age"
          />
          Height:
          <input
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
            placeholder="height"
          />
          <div className="button-container">
            <button type="submit">Add Smurf</button>
            {this.props.updating && (
              <button onClick={this.hide}>Hide Form</button>
            )}
          </div>
        </form>
      </div>
    );
  }
}
