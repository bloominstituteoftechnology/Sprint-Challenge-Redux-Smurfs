import React, { Component } from "react";

let smurf;

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
    const { updating } = this.props;
    if (this.props.updating) {
      console.log(this.props.smurfs);
      smurf = this.props.smurfs
        .filter(smurf => smurf.id === parseInt(this.props.id, 10))
        .pop();
      console.log(smurf);
    }
    updating && console.log(smurf);
    return (
      <div className="form-card">
        <h2>{updating ? `Edit ${smurf.name}` : "Add Smurf"}</h2>
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
            {updating && <button onClick={this.hide}>Hide Form</button>}
          </div>
        </form>
      </div>
    );
  }
}
