import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class AddSmurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };

    this.props.addSmurf(smurf);
  };

  render() {
    return (
      <div>
        <h3>Add a Smurf</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="name"
            name="name"
            value={this.state.name}
            type="text"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="age"
            name="age"
            value={this.state.age}
            type="text"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="height"
            name="height"
            value={this.state.height}
            type="text"
            onChange={this.handleInputChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(AddSmurf);
