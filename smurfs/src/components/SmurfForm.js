import React, { Component } from 'react';
import axios from 'axios';
import { addSmurf } from '../actions';
import connect from 'react-redux/lib/connect/connect';

class SmurfForm extends Component {
  state = {
      name: '',
      age: '',
      height: ''
    };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNewSmurf = e => {
    //event.preventDefault();
        const { name, age, height } = this.state;
        this.props.addSmurf({ name, age, height });
        this.setState({ name: "", age: "", height: "" });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={this.handleNewSmurf}>Add to the village</button>
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {};

export default connect(
    mapStateToProps,
    { addSmurf }
)(SmurfForm);