import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addSmurf } from '../actions/index';

class NewSmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={this.state.name}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Age"
          name="age"
          value={this.state.age}
          onChange={this.handleInput}
        />
        <input
          type="text"
          placeholder="Height (in cm)"
          name="height"
          value={this.state.height}
          onChange={this.handleInput}
        />
        <button>Add New</button>
      </form>
    );
  }
}

export default connect(
  () => ({}),
  { addSmurf }
)(NewSmurfForm);
