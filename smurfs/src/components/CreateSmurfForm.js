import React, { Component } from "react";
import { connect } from "react-redux";
import { newsmurf } from "../actions";

class CreateSmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  handleAddSmurf = () => {
    this.props.newsmurf(this.state);
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    const { name, age, height } = this.state;
    return (
      <div>
        <input
          name="name"
          placeholder="name"
          value={name}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="age"
          placeholder="age"
          value={age}
          onChange={e => this.handleChange(e)}
        />
        <input
          name="height"
          placeholder="height"
          value={height}
          onChange={e => this.handleChange(e)}
        />
        <button onClick={this.handleAddSmurf}>Submit</button>
      </div>
    );
  }
}

export default connect(
  null,
  { newsmurf }
)(CreateSmurfForm);
