import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = () => {
    const { name, age, height } = this.state;
    this.props.createSmurf({ name, age, height });
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  render() {
    return (
      <form>
        <input
          value={this.state.name}
          name='name'
          type='text'
          placeholder='Name'
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.age}
          name='age'
          type='text'
          placeholder='Age'
          onChange={this.handleInputChange}
        />
        <input
          value={this.state.height}
          name='height'
          type='text'
          placeholder='Height'
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.onSubmit()} type='button'>
          Add new Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    createSmurf: state.createSmurf
  };
}

export default connect(mapStateToProps, { createSmurf })(SmurfForm);
