import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

export class componentName extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
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
    if (
      this.state.name.length > 0 &&
      this.state.age.length > 0 &&
      this.state.height.length > 0
    ) {
      this.clear();
      this.props.addSmurf(singleSmurf);
    } else {
      alert('put a complete value');
    }
  };
  clear = () => {
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  handleInput = event => {
    this.setState({ [event.target.placeholder]: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>ADD FORM</h1>
        <form onSubmit={this.updateDatabase}>
          <input
            type="text"
            placeholder="name"
            onChange={this.handleInput}
            value={this.state.name}
          />
          <input
            type="text"
            placeholder="age"
            onChange={this.handleInput}
            value={this.state.age}
          />
          <input
            type="text"
            placeholder="height"
            onChange={this.handleInput}
            value={this.state.height}
          />
          <button onSubmit={this.updateDatabase}>Create a smurf</button>
        </form>
        <h1>END OF ADD FORM</h1>
      </div>
    );
  }
}

export default connect(
  null,
  { addSmurf }
)(componentName);
