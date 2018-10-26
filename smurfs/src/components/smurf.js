import React from "react";

const Smurf = props => {
  return (
    <div className='contact-card'>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <p>{props.smurf.id}</p>

    </div>
  )       
};

export default Smurf;
