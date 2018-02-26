import React, { Component } from "react";
import { connect } from "react-redux";
import { addsmurf } from "../actions";

class smurfInput extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };
  submitHandler = event => {
    event.preventDefault();
    this.props.addsmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          value={this.state.name}
          name="name"
          placeholder="name"
          onChange={this.inputChangeHandler}
        />
        <input
          value={this.state.age}
          name="age"
          placeholder="age"
          onChange={this.inputChangeHandler}
        />
        <input
          value={this.state.height}
          name="height"
          placeholder="height"
          onChange={this.inputChangeHandler}
        />
        <button>Create a New Smurf!</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { addsmurf })(smurfInput);
