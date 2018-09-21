import React from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";
import "./App.css";

class SmurfForm extends React.Component {
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
    this.props.createSmurf(smurf);
    this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          name="name"
          value={this.state.name}
          type="text"
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <input
          name="age"
          value={this.state.age}
          type="number"
          onChange={this.handleInputChange}
          placeholder="Age"
        />
        <input
          name="height"
          value={this.state.height}
          type="email"
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
  { createSmurf }
)(SmurfForm);
