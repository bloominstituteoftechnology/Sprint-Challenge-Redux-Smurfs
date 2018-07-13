import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions/index";

class CreateSmurf extends Component {
  handleChangeSmurf = e => {
    this.setState({ [e.target.name]: e.target.value });
    return e.target.value;
  };

  handleSubmitSmurf = () => {
    this.props.addSmurf({
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>Add Smurf to Village!</h2>
          <input type="text" onChange={this.handleChangeSmurf} name="name" />
          <input type="text" onChange={this.handleChangeSmurf} name="age" />
          <input type="text" onChange={this.handleChangeSmurf} name="height" />
        </div>
        <button onClick={this.handleSubmitSmurf}>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        addingSmurf: state.addingSmurf,
        error: state.error
    };
};

export default connect(
    mapStateToProps, 
    {addSmurf }
)(CreateSmurf)