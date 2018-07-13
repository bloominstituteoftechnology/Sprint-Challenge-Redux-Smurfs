import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs } from "../actions";

class SmurfsForm extends Component {
  editSmurfsHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmitSmurf = () => {
    this.props.addSmurfs({
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
            onChange={this.editSmurfsHandler}
            placeholder="add Smurf name"
          />
          <br />
          <input
            type="number"
            name="age"
            onChange={this.editSmurfsHandler}
            placeholder="input Smurf age"
          />
          <br />
          <input
            type="text"
            name="height"
            onChange={this.editSmurfsHandler}
            placeholder="input Smurf height in cm"
          />
          <br />
          <button onClick={this.handleSubmitSmurf}> Add Smurf </button>
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
    addSmurfs,
    fetchSmurfs
  }
)(SmurfsForm);
