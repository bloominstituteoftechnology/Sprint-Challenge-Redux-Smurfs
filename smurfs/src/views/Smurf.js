import React from 'react';

function Smurf(props) {
  return (
    <div>
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.editSmurf(props.smurf)}>Edit</button>
      <button onClick={event => props.deleteClick(event, props.smurf.id)}>
        Delete
      </button>
    </div>
  );
}

export default Smurf;
