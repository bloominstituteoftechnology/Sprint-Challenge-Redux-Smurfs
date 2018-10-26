import React from "react";

const Smurf = props => {
  return (
    <div className='contact-card'>
      <h3>{props.smurf.name}</h3>
      <p>{props.smurf.age}</p>
      <p>{props.smurf.height}</p>
      <button 
        onClick={() => {}}>DELETE</button>
    </div>
  )       
};

export default Smurf;
