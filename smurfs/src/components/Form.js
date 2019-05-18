import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSmurfs, addSmurfs } from "../actions";
class SmurfsForm extends Component {
  editSmurfsHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

   handleSubmit = () => {
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
            placeholder="Name"
          />
          <br />
          <input
            type="number"
            name="age"
            onChange={this.editSmurfsHandler}
            placeholder="Age"
          />
          <br />
          <input
            type="text"
            name="height"
            onChange={this.editSmurfsHandler}
            placeholder="Height"
          />
          <br />
          <button onClick={this.handleSubmit}> Add Smurf </button>
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