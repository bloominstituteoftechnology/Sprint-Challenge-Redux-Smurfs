import React, { Component } from "react";
import "./App.css";
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

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = event => {
    event.preventDefault();
    this.props.addSmurf(this.state.name, this.state.age, this.state.height);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    console.log(this.props);
    return (
      <div className="smurf-form">
        <h1>Add a Smurf</h1>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.changeHandler}
          />
          <input
            type="number"
            name="height"
            placeholder="Height"
            value={this.state.height}
            onChange={this.changeHandler}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(AddSmurfForm);
