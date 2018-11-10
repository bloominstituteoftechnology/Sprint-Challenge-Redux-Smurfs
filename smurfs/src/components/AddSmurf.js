import React from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/index";

export class AddSmurf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitSmurf = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
      return (
        <form onSubmit={this.submitSmurf} style={{marginTop: '20px'}}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputHandler}
            placeholder="Name"
          />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.inputHandler}
            placeholder="Age"
          />
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.inputHandler}
            placeholder="Height (in cm)"
          />
          <button type="submit">Add New Smurf</button>
        </form>
      );
    }
  }


const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { addSmurf }
)(AddSmurf);