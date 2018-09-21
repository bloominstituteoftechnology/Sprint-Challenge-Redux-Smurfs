import React from 'react';
import Smurf from './Smurf';

class SmurfList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.smurfs.map(smurf => <Smurf key={smurf.name} smurf={smurf} /> )
        }
      </div>
    )
  }
}

export default SmurfList;