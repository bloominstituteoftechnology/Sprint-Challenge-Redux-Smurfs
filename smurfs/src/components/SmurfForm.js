import React, { Component } from 'react';
import axios from 'axios';
import { addSmurf } from '../actions';
import { connect } from 'react-redux';

class SmurfForm extends Component {
    state = {
      name: '',
      age: '',
      height: '',
    };
    handleInput = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    addSmurf = e => {
      e.preventDefault();
      this.props.addSmurf({
        name: this.state.name,
        age: this.state.age,
        height: this.state.height,
      });
      this.setState({
        name: '',
        age: '',
        height: '',
      }); 
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input 
            onChange={this.handleInputChange}
            placeholder="Name"
            value={this.state.name}
            name="Name"
          />
          <input 
            onChange={this.handleInputChange}
            placeholder="Age"
            value={this.state.age}
            name="Age"
          />
          <input 
            onChange={this.handleInputChange}
            placeholder="Height"
            value={this.state.height}
            name="Height"
          />
          <button type="submit" className="button-class">Add to the village!</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;