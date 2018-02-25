import React, { Component } from 'react';
import { connect } from 'react-redux';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs-Container">
        Smurfs Container
        <ul>
        {this.props.smurfs.map((smurf, i) => {
          <li key={i}>
            {smurf.name} <br/>
            {smurf.age} <br/>
            {smurf.height}
          </li>
        })}
        </ul>
      </div>
    )
  }
}

export default Smurfs;