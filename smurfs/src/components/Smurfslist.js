import React from 'react';

function Smurfslist(props) {
  return (
    <div className="smurf">
      <h3>{props.smurf.name}</h3>
      <strong>{props.smurf.height} tall</strong>
      <p>{props.smurf.age} old</p>
    </div>
  );
}

export default Smurfslist;
