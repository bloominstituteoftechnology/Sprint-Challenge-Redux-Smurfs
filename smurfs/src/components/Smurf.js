import React from 'react';

const Smurf = props => {
  return (
    <div
      style={{border: '1px dotted blue', maxWidth: '33%', margin: '5px auto'}}
      onClick={() => props.selectSmurf(props.smurf.name)}>
      <h2>{props.smurf.name}</h2>
      <h3>{props.smurf.age} years old</h3>
      <h3>{props.smurf.height} tall</h3>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>
        Kill this Smurf
      </button>
    </div>
  );
};

export default Smurf;
