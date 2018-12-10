import React from "react";


const Smurf = props => {
  return (
    <div className="smurf">
      <h2>{props.smurf.name}</h2>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button onClick={() => props.deleteSmurf(props.smurf.id)}>X</button>
      <button onClick={() => props.updateForm(props.smurf)}>Update Smurf</button>
    </div>
  );
};

export default Smurf;
