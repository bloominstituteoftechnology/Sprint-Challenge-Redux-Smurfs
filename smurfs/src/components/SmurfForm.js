import React, { Component } from 'react'
import { connect } from 'react-redux';

export default class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.initialState;
    this.submitForm = this.submitForm.bind(this);
  }

  updateInput = (event) => {
    const { name, value} = event.target;
    this.setState({[name]: value});
  }

  submitForm = (event) => {
    event.preventDefault();
    const { name, age, height } = this.state;
    this.props.submitForm({ name, age, height });
    this.setState({name: '', age: '', height: ''});
  }
  
  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label for="name">Name:</label><input type="text" name="name" placeholder='Enter text' value={this.state.name} onChange={this.updateInput} />
        </div>
        <div>
          <label for="age">Age:</label><input type="text" name="age" placeholder='Enter text' value={this.state.age} onChange={this.updateInput} />
        </div>
        <div>
          <label for="height">Height:</label><input type="text" name="height" placeholder='Enter text' value={this.state.height} onChange={this.updateInput} />
        </div>
        <div>
          <input type="submit" value="Submit New Smurf" />
        </div>
      </form>
    )
  }
}
