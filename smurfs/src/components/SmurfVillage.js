import React from 'react';

import Smurf from './Smurf.js';

const SmurfVillage = props => {
  return (
    <div>
      {props.smurfs.map(smurf => {
        return <Smurf id={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfVillage;
