import React, { Component } from 'react';
import Smurf from './Smurf';
 class SmurfsList extends Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => (
          <Smurf smurf={smurf} key={smurf.name} />
        ))}
      </div>
    );
  }
}
 export default SmurfsList;