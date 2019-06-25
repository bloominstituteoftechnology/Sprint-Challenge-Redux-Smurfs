import React, { Component } from 'react';

class Smurf extends Component {
  render() {
    return (
      <div className="smurf">
        <div className="smurf-name">Name: {this.props.smurf.name}</div>
        <div className="smurf-height">Height: {this.props.smurf.height}</div>
        <div className="smurf-age">Age: {this.props.smurf.age}</div>
      </div>
    )
  }
}

export default Smurf;
