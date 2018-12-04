import React from 'react';
const SmurfList = props => {
  return (
    <div>
      {props.smurfs.map((smurf, index) => (
        <div id={index} key={smurf.name}>
          {smurf.name}
        </div>
      ))}
    </div>
  );
};
export default SmurfList;
