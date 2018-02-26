import React from 'react';

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
