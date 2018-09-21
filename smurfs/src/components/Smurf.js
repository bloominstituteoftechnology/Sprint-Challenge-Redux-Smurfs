import React from 'react';

const Smurf = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <h4>{props.smurf.age}</h4>
      <h4>{props.smurf.height}</h4>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>
        Delete Smurf
      </button>
    </div>
  );
};

export default Smurf;
