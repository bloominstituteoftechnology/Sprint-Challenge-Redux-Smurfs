import React from "react";

const Smurf = props => (
  <div className="smurf">
    <h2>
      <i
        className="far fa-edit"
        onClick={() =>
          props.toggleEditing(
            props.smurf.name,
            props.smurf.age,
            props.smurf.height,
            props.smurf.id
          )
        }
      />
      {props.smurf.name}
      <i
        className="fas fa-trash"
        onClick={() => props.deleteSmurf(props.smurf.id)}
      />
    </h2>
    <p>{props.smurf.age} smurf years</p>
    <p>{props.smurf.height}</p>
  </div>
);

export default Smurf;
