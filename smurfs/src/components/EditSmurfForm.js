import React, { Component } from 'react';
import { connect } from 'react-redux';

import { editSmurf } from '../actions';

class EditSmurfForm extends Component {
  state = {
    editInputs: {
      name: '',
      age: '',
      height: '',
      id: this.props.smurf.id,
    },
  };

  resetForm() {
    this.setState({
      editInputs: {
        name: '',
        age: '',
        height: '',
      },
    });
  }

  handleInput = (event) => {
    this.setState({
      editInputs: {
        ...this.state.editInputs,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleEditSmurf = (event) => {
    event.preventDefault();
    console.log('HandleEditSmurf');
    this.props.editSmurf(this.state.editInputs);
    this.resetForm();
  };

  render() {
    console.log('edit form', this.props);
    return (
      <form onSubmit={this.handleEditSmurf}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={this.state.editInputs.name}
          onChange={this.handleInput}
        />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={this.state.editInputs.age}
          onChange={this.handleInput}
        />
        <label>Height:</label>
        <input
          type="text"
          name="height"
          value={this.state.editInputs.height}
          onChange={this.handleInput}
        />
        <button type="submit" value="Edit Smurf">
          Edit Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editingSmurf: state.editingSmurf,
  };
};

export default connect(
  mapStateToProps,
  {
    editSmurf,
  }
)(EditSmurfForm);
