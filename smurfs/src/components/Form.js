import React, { Component } from 'react';
import { connect } from 'react-redux';

import { newSmurf } from '../actions/index';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: '',
    };
  }

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    this.props.newSmurf(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            onChange={this.onInputChange}
            value={this.state.name}
            placeholder='Enter name'
            name='name'
          />
          <input
            type='text'
            onChange={this.onInputChange}
            value={this.state.age}
            placeholder='Enter age'
            name='age'
          />
          <input
            type='text'
            onChange={this.onInputChange}
            value={this.state.height}
            placeholder='Enter height in cm'
            name='height'
          />
        </form>
        <button>Add Smurf</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { newSmurf: newSmurf }
)(Form);
