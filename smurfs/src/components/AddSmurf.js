import React, { Component } from "react";
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class AddSmurf extends Component {
  /*
    we need a few things:
    name
    age
    height
    and some sort of button!
  */

  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState(
      (this.state = {
        name: "",
        age: "",
        height: ""
      })
    );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Please add name"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="age"
            value={this.state.age}
            placeholder="Please add age"
          />
          <input
            onChange={this.changeHandler}
            type="text"
            name="height"
            value={this.state.height}
            placeholder="Please add height"
          />
          <button>Please Submit</button>
        </form>
      </div>
    );
  };

}


export default connect(
    null, { addSmurf })(AddSmurf);