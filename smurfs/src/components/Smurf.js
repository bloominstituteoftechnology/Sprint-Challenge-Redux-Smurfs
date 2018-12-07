import React from 'react';

const Smurf = props => {
  return (
    <h2 onClick={() => props.selectSmurf(props.smurf.name)}>
      {props.smurf.name}
    </h2>
  );
};

export default Smurf;
