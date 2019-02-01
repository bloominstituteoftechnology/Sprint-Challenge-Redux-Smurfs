import React from 'react';

import Smurf from './Smurf';

export const SmurfsList = props => {
  return (
    <ul>
      {props.smurfs.map(smurf => {
        return <Smurf key={smurf.id} smurf={smurf} />
      })}
    </ul>
  );
};

