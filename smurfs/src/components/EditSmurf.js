import React from 'react';
const EditSmurf = () => {
  <div className="card">
    <input>{smurf.name}</input>
    <input>{smurf.height}</input>
    <input>{smurf.age}</input>
    <div className="btns">
      <button
        disabled
        className="btn btn-remove"
        onClick={() => handleDeleteSmurf(smurf.id)}
      >
        Remove
      </button>
      <button
        className="btn btn-edit"
        // onClick={() => props.handleUpdateClick(props.id)}
      >
        Update
      </button>
    </div>
  </div>;
};

export default EditSmurf;
