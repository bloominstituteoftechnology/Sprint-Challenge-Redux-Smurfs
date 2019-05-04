import React, { Component } from 'react';
import Smurf from './Smurf';

class SmurfsList extends Component {
  render() {
    return (
      <div className="smurf-wrapper">
        <h1>Smurf Village</h1>
        {this.props.smurfs.map(smurf => (
          <Smurf
            smurf={smurf}
            key={smurf.name}
            handleDeleteSmurf={this.props.handleDeleteSmurf}
            handleUpdateSmurf={this.props.handleUpdateSmurf}
          />
        ))}
      </div>
    );
  }
}

export default SmurfsList;
