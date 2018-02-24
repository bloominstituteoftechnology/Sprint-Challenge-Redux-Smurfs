import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNewSmurf } from '../actions/createNewSmurf';

class SmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  };

  addSmurf = (event) => {
    event.preventDefault();
    const newSmurf = Object.assign({}, this.state);
    this.props.createNewSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  };

  updateSmurf = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <div className="smurfForm">
        <form onSubmit={this.addSmurf}>
          <input name="name"
          onChange={this.updateSmurf}
          placeholder="Name"
          value={this.state.value}
          />
          <input name="age"
          onChange={this.updateSmurf}
          placeholder="Age"
          value={this.state.age}
          />
          <input name="height"
          onChange={this.updateSmurf}
          placeholder="Height"
          value={this.state.value}
          />
          <button type="submit">Add Smurf</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createNewSmurf })(SmurfForm);