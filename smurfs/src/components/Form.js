import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addSmurf } from '../actions';

class Form extends Component {
  state = {
    name: '',
    age: '',
    height: '',
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleButton = () => {
    this.props.addSmurf(this.state);
    this.setState({name: '', age: '', height: '',})
  }
  render() {
    return(
      <div>
        <input 
          placeholder="Name"
          name="name"
          onChange={this.handleChange}
          value={this.state.name}/>
        <input 
          placeholder="Age"
          name="age"
          onChange={this.handleChange}
          value={this.state.age}/>
        <input 
          placeholder="Height"
          name="height"
          onChange={this.handleChange}
          value={this.state.height}/>
        <button onClick={this.handleButton}>Add Smurf</button>
      </div>
    )
  }
}

export default connect(null, {addSmurf})(Form);