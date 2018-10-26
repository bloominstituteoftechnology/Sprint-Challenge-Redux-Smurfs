import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <div className="card">
      <h3>{smurf.name}</h3>
      <p>{smurf.height}</p>
      <p>{smurf.age}</p>
      <div className="btns">
        <button
          className="btn btn-remove"
          // onClick={() => props.deleteSmurf(props.id)}
        >
          Remove
        </button>
        <button
          className="btn btn-edit"
          // onClick={() => props.handleUpdateClick(props.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default Smurf;
