import React from "react";

const SingleSmurf = props => {
  const id = props.match.params.id;
  const smurf = props.smurfs.find(smurf => `${smurf.id}` === id);

  if (!smurf) {
      return <h1>No Smurfs</h1>
  }
  
  console.log(smurf)
  return (
    <div>
      <h3>Name: {smurf.name}</h3>
      <p>Height: {smurf.height}</p>
      <p>Age: {smurf.age}</p>
    </div>
  );
};

export default SingleSmurf;
