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

  createSmurfHandler = (event) => {
    let newSmurf = {
      name: this.state.name,
      age: Number(this.state.age),
      height: this.state.height,
    }
    this.props.createSmurf(newSmurf);
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  render() {
    return(
      <div>
        <form className="Smurf-Form">
          <input
            value={this.state.name}
            onChange={this.smurfNameHandler}
            placeholder="Name"
          />
          <input 
            value ={this.state.age}
            onChange={this.smurfAgeHandler}
            type="number"
            placeholder="Age"
          />
          <input
            value ={this.state.height}
            onChange={this.smurfHeightHandler}
            placeholder="Height"
          />
          <button 
            onClick={() => {this.createSmurfHandler()}} 
            type="button">
            Create Smurf!
          </button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createSmurf })(CreateSmurfForm);