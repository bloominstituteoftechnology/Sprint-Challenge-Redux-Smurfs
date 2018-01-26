import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, createSmurf } from '../actions';

class SmurfInput extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    })
  }

  inputSubmitHandler = (event) => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.setState({
      name: '',
      age: '',
      height: '',
    })
    this.props.createSmurf({name, age, height });
  }

  render() {
    return (
      <form onSubmit={this.inputSubmitHandler}>
        <input onChange={this.inputChangeHandler} placeholder="Name" name='name' value={ this.state.name }></input>
        <input onChange={this.inputChangeHandler} placeholder="Age" name='age' value={this.state.age}></input>
        <input onChange={this.inputChangeHandler} placeholder="Height" name='height' value={this.state.height}></input>
        <button>Submit</button>
      </form>
    );
  };
};

export default connect(null, { getSmurfs, createSmurf })(SmurfInput);