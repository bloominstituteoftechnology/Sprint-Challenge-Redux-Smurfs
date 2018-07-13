import React, { Component } from "react";
import connect from 'react-redux';

class Smurf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      age:  '',
      height: ''
    }
  }
  render() {
    return (
    <div>
      <h1>{this.props.smurf.name}</h1>
      <p>Age: {this.props.smurf.age} smurf years</p>
      <p>Height: {this.props.smurf.height} cm tall</p>
    </div>
  )}
}

export default Smurf;
