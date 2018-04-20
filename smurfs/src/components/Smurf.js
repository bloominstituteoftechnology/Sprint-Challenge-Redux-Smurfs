import React, { Component } from 'react';

class Smurf extends Component{

  render() {
    const {id, name, age, height} = this.props.smurf;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{height}</td>
      </tr>
    );
  }
}

export default Smurf;

