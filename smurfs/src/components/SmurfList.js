import React from "react";
import Smurf from "./Smurf";

const SmurfList = ({ smurfs, handleUpdate, handleDelete }) => (
  <div className="smurf-list">
    {smurfs.map(smurf => (
      <Smurf
        smurf={smurf}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        key={smurf.id}
      />
    ))}
  </div>
);

export default SmurfList;
