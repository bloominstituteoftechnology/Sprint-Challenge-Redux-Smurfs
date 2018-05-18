import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class FriendForm extends Component {
  state = {
    name: '',
    age: '',
    id: ''
  };
  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    const { name, age, id } = this.state;
    this.props.createFriend({ name, age, id });
    this.setState({ name: '', age: '', id: '' });
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
          value={this.state.id}
          name="email"
          type="text"
          placeholder="Id"
          onChange={this.handleInputChange}
        />
        <button onClick={() => this.handleAddSmurff()} type="button">
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