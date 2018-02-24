import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleAddSmurf = _ => {
    this.props.addSmurf(this.state);
    this.setState({
      name: '', 
      age: '', 
      height: ''
    });
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
          onChange={this.handleInput}
        />
        <input
          className="input"
          value={this.state.age}
          name="age"
          type="text"
          placeholder="Age"
          onChange={this.handleInput}
        />
        <input
          className="input"
          value={this.state.height}
          name="height"
          type="text"
          placeholder="Height"
          onChange={this.handleInput}
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
    addingSmurf: state.addingSmurf
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);
