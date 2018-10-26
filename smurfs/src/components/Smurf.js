import React from "react";

const Smurf = props => {
  const deleteSmurf = e => {
    props.deleteSmurf(props.smurf.id);
  };

  return (
    <div className="Smurf ">
      <h2 className="card-header">{props.smurf.name}</h2>
      <h3>age: {props.smurf.age}</h3>
      <h3>height: {props.smurf.height} cm</h3>

      <button
        className="delete-button btn btn-secondary btn-lg"
        onClick={deleteSmurf}
      >
        Delete
      </button>
    </div>
  );
};

Smurf.defaultProps = {
  name: "",
  height: "",
  age: ""
};

export default Smurf;
