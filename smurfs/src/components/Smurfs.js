import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div>
      {props.smurfs.map((smurf, i) => <Smurf key={i} smurf={smurf} />)}
    </div>
  );
}

export default Smurfs;
