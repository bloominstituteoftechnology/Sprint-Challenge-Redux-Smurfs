import React from "react";

const Smurf = ({ smurf, handleUpdate, handleDelete }) => (
  <div className="smurf">
    <h2>Name: {smurf.name}</h2>
    <p>Age: {smurf.age}</p>
    <p>Height: {smurf.height}</p>
    <button onClick={() => handleUpdate(smurf.id)}>Update</button>
    <button onClick={() => handleDelete(smurf.id)}>Delete</button>
  </div>
);

export default Smurf;
