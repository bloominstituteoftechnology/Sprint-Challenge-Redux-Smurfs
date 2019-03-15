import React from 'react';
import Smurf from './Smurf';

const Smurfs = props => {
  return (
    <div className='smurfs-container'>
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            key={smurf.id}
            id={smurf.id}
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
          />
        );
      })}
    </div>
  );
};

export default Smurfs;