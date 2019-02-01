import React, { Component } from 'react';

import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div>
        {
          this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} /> )
        }
      </div>
    );
  }
}

export default Smurfs;
