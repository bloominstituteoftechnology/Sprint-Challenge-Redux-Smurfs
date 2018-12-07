import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

class Form extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  onChangeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    let smurf = this.state;
    if (this.state.name && this.state.age && this.state.height) {
      this.props.addSmurf(smurf);
      this.setState({
        name: "",
        age: "",
        height: ""
      });
    }
    return null;
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          onChange={this.onChangeHandler}
          value={this.state.name}
          type="text"
          placeholder="Smurf Name..."
        />
        <input
          name="age"
          onChange={this.onChangeHandler}
          value={this.state.age}
          type="number"
          min="1"
          placeholder="Smurf Age..."
        />
        <input
          name="height"
          onChange={this.onChangeHandler}
          value={this.state.height}
          type="number"
          min="1"
          placeholder="Smurf Height..."
        />
        <button>Submit</button>
      </form>
    );
  }
}

const mapStateTpProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs
});

export default connect(
  mapStateTpProps,
  { addSmurf }
)(Form);
