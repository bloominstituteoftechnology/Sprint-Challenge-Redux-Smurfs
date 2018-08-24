import React from "react";

const Smurf = props => {
  return (
    <div className="Smurf">
      <button className="trash"> x </button>

      <h3 className="smurf-name">{props.name}</h3>
      <div className="smurf-nameplate" />
    </div>
  );
};

export default Smurf;
