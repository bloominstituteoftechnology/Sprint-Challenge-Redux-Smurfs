import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

export class componentName extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: null,
      height: ''
    };
  }
  updateDatabase = e => {
    const { name, age, height } = this.state;
    e.preventDefault();
    const singleSmurf = {
      name,
      age,
      height
    };
    this.state.name.length > 0 &&
    this.state.age.length > 0 &&
    this.state.height.length > 0
      ? this.props.addSmurf(singleSmurf)
      : alert('put a complete value');
  };

  handleInput = event => {
    this.setState({ [event.target.placeholder]: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.updateDatabase}>
          <input type="text" placeholder="name" onChange={this.handleInput} />
          <input type="text" placeholder="age" onChange={this.handleInput} />
          <input type="text" placeholder="height" onChange={this.handleInput} />
          <button onSubmit={this.updateDatabase}>Create a smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(componentName);
