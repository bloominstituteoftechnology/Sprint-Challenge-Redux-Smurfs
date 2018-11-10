import React, { Component } from "react";
import { connect } from "react-redux";
import { newSmurf } from "../actions/index";

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.newSmurf(this.state);
  };

  render() {
    return (
      <div className="smurf-form">
        <div>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
        </div>
        <div className="button">
          <div className="submit" onClick={this.submitHandler}>
            Add to the village
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { newSmurf: newSmurf }
)(SmurfForm);
