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

  hide = () => {
    this.props.clear();
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
    const { updating, toggle } = this.props;
    const { name, age, height } = this.state;
    if (this.props.updating) {
      smurf = this.props.smurfs
        .filter(smurf => smurf.id === parseInt(this.props.id, 10))
        .pop();
    }
    return (
      <div className="form-card">
        <h2>{updating ? `Edit ${smurf.name}` : "Add Smurf"}</h2>
        <form onSubmit={this.submit}>
          Name:
          <input
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="name"
          />
          Age:
          <input
            name="age"
            type="number"
            value={age}
            onChange={this.handleChange}
            placeholder="age"
          />
          Height:
          <input
            name="height"
            value={height}
            onChange={this.handleChange}
            placeholder="height"
          />
          <div className="button-container">
            <button type="submit">Add Smurf</button>
            {updating && (
              <div className="cancel" onClick={toggle}>
                Cancel
              </div>
            )}
          </div>
        </form>
      </div>
    );
  }
}
