import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateSmurf, clearSingleSmurf } from '../actions';

export class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.singleSmurf.name,
      age: this.props.singleSmurf.age,
      height: this.props.singleSmurf.height,
      id: this.props.singleSmurf.id
    };
  }

  updateDatabase = e => {
    const { name, age, height, id } = this.state;
    e.preventDefault();
    const singleSmurf = {
      name,
      age,
      height
    };
    this.state.name.length > 0 &&
    this.state.age.length > 0 &&
    this.state.height.length > 0
      ? this.props.updateSmurf(singleSmurf, id)
      : alert('put a complete value');
    this.props.clearSingleSmurf();
  };

  handleInput = event => {
    this.setState({ [event.target.placeholder]: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>UPDATE FORM</h1>
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
          <button onSubmit={this.updateDatabase}>
            Update {this.props.singleSmurf.name}
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { updateSmurf, clearSingleSmurf }
)(componentName);
