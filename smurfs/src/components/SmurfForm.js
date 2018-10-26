import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions";

class SmurfForm extends Component {
  smurfsHandler = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  
  };
   submitSmurf = event => {
    event.preventDefault();
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
  };
   render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="name"
            onChange={this.smurfsHandler}
            placeholder="Smurf Name"
          />
          <br />
          <input
            type="number"
            name="age"
            onChange={this.smurfsHandler}
            placeholder="Smurf Age"
          />
          <br />
          <input
            type="text"
            name="height"
            onChange={this.smurfsHandler}
            placeholder="Smurf Height."
          />
          <br />
          <button onClick={this.submitSmurf}> Add Smurf </button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    addedSmurf: state.addedSmurf,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {
    addSmurf,
    fetchSmurfs
  }
)(SmurfForm);