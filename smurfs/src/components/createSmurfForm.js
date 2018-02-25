import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSmurf } from '../actions';

class CreateSmurfForm extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  smurfNameHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  smurfAgeHandler = (event) => {
    this.setState({ age: event.target.value })
  }

  smurfHeightHandler = (event) => {
    this.setState({ height: event.target.value })
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.createSmurf(event.target.value);
  }

  render() {
    return(
      <div>
        <form action="">
          <input value={this.state.name} onChange={this.smurfNameHandler} />
          <input value ={this.state.age} onChange={this.smurfAgeHandler} type="number" />
          <input value ={this.state.height} onChange={this.smurfHeightHandler} />
          <button>Create Smurf!</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createSmurf })(CreateSmurfForm);