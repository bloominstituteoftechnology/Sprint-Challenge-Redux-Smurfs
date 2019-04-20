import React from "react";

const Smurf = ({ smurf, handleDeleteSmurf }) => {
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>{smurf.height}</p>
      <p>{smurf.age}</p>
      <div>
      <button
          onClick={() => handleDeleteSmurf(smurf.id)}
        >
          Delete
        </button>    
      </div>
    </div>

  );
};

export default Smurf;
