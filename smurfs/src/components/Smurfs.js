import React from 'react';
import './App.css';
import Smurf from './Smurf';

class Smurfs extends React.Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return <Smurf key={smurf.id} smurf={smurf} />
        })}
      </div>
    )
  }
}

export default Smurfs;
