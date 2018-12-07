import React from "react";

const Smurfs = props => {
  if (!props.smurfs || !props.smurfs.length) {
    return <h3>Smurfs are loading!</h3>
  }

  return props.smurfs.map(smurf => (
    <div className="Smurf" key={smurf.id}>
      <p>Name: {smurf.name}</p>
      <p>Height: {smurf.height}</p>
      <p>Age: {smurf.age}</p>
      <button className="list-btn" onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  ))
};

export default Smurfs;
