import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = () => {
    //const { name, age, height } = this.state;
    this.props.addSmurf({ 
      name: this.state.name, 
      age: this.state.age, 
      height:this.state.height });
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <form className="smurfForm" onSubmit={this.handleAddSmurf}>
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.email}
          name="height"
          type="text"
          placeholder="height"
          onChange={this.handleInputChange}
        />
        <button type="submit">
          Add New Friend
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);
