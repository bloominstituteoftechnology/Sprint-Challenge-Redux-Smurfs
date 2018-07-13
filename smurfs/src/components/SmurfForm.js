import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      buttonText: 'Add',
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  submitSmurf = event => {
    event.preventDefault();
    const smurf = {
      name: this.state.smurf.name,
      age: this.state.smurf.age,
      height: this.state.smurf.height
    }
    this.props.addSmurf(smurf);
  }

  handleInputChange = e => {
    const smurf = this.state.smurf;
    smurf[e.target.name] = e.target.value;
    this.setState({ smurf: smurf });
  };

  render() {
    return (
      <form className="smurf-form" onSubmit={this.submitSmurf}>
        <input id="name" name="name" onChange={this.handleInputChange} type="text" placeholder="Name" value={this.state.smurf.name} />
        <input id="age" name="age" onChange={this.handleInputChange} type="text" placeholder="Age" value={this.state.smurf.age}  />
        <input id="height" name="height" onChange={this.handleInputChange} type="text" placeholder="Height" value={this.state.smurf.height}  />
        <button id="submit" type="submit">{this.state.buttonText}</button>
      </form>
    );
  }
}

export default connect(null, { addSmurf })(SmurfForm);