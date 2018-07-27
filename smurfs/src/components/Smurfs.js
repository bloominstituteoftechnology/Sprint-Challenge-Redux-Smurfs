import React, { Component } from "react";

class Smurfs extends Component {
  render() {
    return (
      <ul>
        {this.props.smurfs.map(smurf => {
          return <li key={smurf.id}>{smurf.name}</li>;
        })}
      </ul>
    );
  }
}

export default Smurfs;
