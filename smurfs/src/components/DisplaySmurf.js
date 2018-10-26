import React from "react";


const DisplaySmurf = props => {
  return (
    <div className="smurfDisplay">
      <h3> {props.smurf.name}</h3>
      <p> age : {props.smurf.age}</p>
      <p> height : {props.smurf.height}</p>
      <button
        onClick={() => {
          props.deleteSmurf(props.smurf.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default DisplaySmurf;
