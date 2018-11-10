import React, { Component } from 'react';
import Smurf from './Smurf';

class SmurfsList extends Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.id} />
        ))}
      </div>
    );
  }
}

export default SmurfsList;