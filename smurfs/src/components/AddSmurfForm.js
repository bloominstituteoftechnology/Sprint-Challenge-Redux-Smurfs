import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class AddSmurfForm extends Component {
  render() {
    return (
      <form onSubmit= {this.props.addNewSmurf}>
        <input
          onChange={this.props.inputHandler}
          name="name"
          type="text"
          value={this.props.name}
          placeholder="...name"
        />
        <input
          onChange={this.props.inputHandler}
          name="age"
          type="number"
          value={this.props.age}
          placeholder="...age"
        />
        <input
          onChange={this.props.inputHandler}
          name="height"
          type="text"
          value={this.props.height}
          placeholder="...height"
        />
        <button>Add Smurf</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurfForm);
