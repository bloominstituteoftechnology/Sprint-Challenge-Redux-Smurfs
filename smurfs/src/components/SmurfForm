import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    email: ''
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, email } = this.state;
    this.props.createSmurf({ name, age, email });
    this.setState({ name: '', age: '', email: '' });
  };

  render() {
    return (
      <form className="Column-Layout">
        <input
          className="input"
          value={this.state.name}
          name="name"
          type="text"
          placeholder="Name"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInputChange}
        />
        <input
          className="input"
          value={this.state.email}
          name="email"
          type="text"
          placeholder="Email"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurf()} type="button">
          Add New Smurf
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.error,
    creatingSmurf: state.creatingSmurf
  };
};

export default connect(mapStateToProps, { createSmurf })(SmurfForm);