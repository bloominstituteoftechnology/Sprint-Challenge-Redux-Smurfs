import React, { Component } from "react";
import { connect } from "react-redux";
import { updateSmurf } from "../actions/index";

 class UpdateSmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };
   handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
   handleSubmitUpdate = event => {
    event.preventDefault();
    this.props.updateSmurf(this.props.id, this.state);
  };
   render() {
    return (
      <form onSubmit={this.handleSubmitUpdate}>
        <input
          type="text"
          onChange={this.handleInputChange}
          name="name"
          placeholder="name"
          value={this.state.name}
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="age"
          placeholder="age"
          value={this.state.age}
        />
        <input
          type="text"
          onChange={this.handleInputChange}
          name="height"
          placeholder="height"
          value={this.state.height}
        />
        <button>Submit</button>
      </form>
    );
  }
}
 export default connect(
  () => ({}),
  { updateSmurf }
)(UpdateSmurfForm);