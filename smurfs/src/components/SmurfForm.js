import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleSmurfInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const smurf = { name: this.state.name, age: this.state.age, height: this.state.height };
    this.props.addSmurf(smurf);
    this.setState({ name: '', age: '', height: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="smurf name"
          onChange={this.handleSmurfInput}
          name="name"
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="smurf age"
          onChange={this.handleSmurfInput}
          name="age"
          value={this.state.age}
        />
        <input
          type="text"
          placeholder="smurf height"
          onChange={this.handleSmurfInput}
          name="height"
          value={this.state.height}
        />
        <button onClick={this.handleSubmit}>Add New Smurf</button>
      </div>
    );
  }
}
export default connect(
  null,
  { addSmurf }
)(SmurfForm);
