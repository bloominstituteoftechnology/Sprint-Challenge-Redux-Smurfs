import React, { Component } from "react";

class Smurf extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.smurf.name}</h3>
        <p>{this.props.smurf.age}</p>
        <p>{this.props.smurf.height}</p>
      </div>
    );
  }
}

export default Smurf;
