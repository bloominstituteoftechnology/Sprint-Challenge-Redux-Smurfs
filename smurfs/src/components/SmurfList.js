import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
  return (
    <div>
      <h2>Smurf Village</h2>
      {props.smurfs.map(s => (
        <Smurf key={s.name} smurf={s} selectSmurf={props.selectSmurf} />
      ))}
    </div>
  );
};

export default SmurfList;
