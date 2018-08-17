import React from 'react';

const Smurfs = props => {
  return (
    <div className='smurfs-container'>
      {props.smurfs.map(smurf => {
        return (
          <div className='smurf' key={smurf.id}>
            <h2>{smurf.name}</h2>
            <p>{smurf.height}, {smurf.age} years old </p>
          </div>
        );
      })}
    </div>
  );
}

export default Smurfs;
