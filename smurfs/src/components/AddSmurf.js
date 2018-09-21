import React, { Component } from "react";
import { connect } from "react-redux";
import { addSmurf } from "../actions";

const resetState = {
  name: "",
  age: "",
  height: ""
};

class AddSmurf extends Component {
  state = {
    name: "",
    age: "",
    height: ""
  };

  handleInput = event => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };    
    this.props.addSmurf(smurf);
    this.setState(resetState);
  };

  render() {
    return (
      <form>
        <h1>ADD SMURF</h1>
        <input
          value={this.state.name}
          name="name"
          onChange={this.handleInput}
        />
        <input value={this.state.age} name="age" onChange={this.handleInput} />
        <input
          value={this.state.height}
          name="height"
          onChange={this.handleInput}
        />
        <button onClick={this.addSmurf}>submit</button>
      </form>
    );
  }
}

// const mapStatetoProps = state => {
//     return {

//     }
// }

export default connect(
  null,
  { addSmurf }
)(AddSmurf);
