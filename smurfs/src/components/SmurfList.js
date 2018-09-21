import React from 'react';
import Smurf from './Smurf';

const SmurfList = (props) => {
  return (
    <div>
      <h1>Here be your Smurfs:</h1>
      {props.smurfs.map((smurf) => {
        return (
          <Smurf
            smurf={smurf}
            key={smurf.id}
          />
        );
      })}
    </div>
  );
};
export default SmurfList;