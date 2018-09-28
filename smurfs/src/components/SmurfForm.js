import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewSmurf } from "../actions";

class SmurfForm extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleAddNewSmurf = () => {
    const smurf = this.state;
    this.props.addNewSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div>
        <input
          text="name"
          value={this.state.name}
          type="text"
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <input
          text="age"
          value={this.state.age}
          type="number"
          onChange={this.handleInputChange}
          placeholder="Age"
        />
        <input
          text="height"
          value={this.state.height}
          type="height"
          onChange={this.handleInputChange}
          placeholder="Height"
        />
        <button onClick={this.handleAddNewSmurf}>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addNewSmurf }
)(SmurfForm);
