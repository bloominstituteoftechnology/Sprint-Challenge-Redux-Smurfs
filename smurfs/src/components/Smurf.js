import React from 'react';

const Smurf = props => {
  console.log(props.id)
  return (
      <div className="Smurf" onClick={() => props.history.push(`/${props.id}`)}>
        <h3>{props.name}</h3>
        <p>{props.height} tall</p>
        <p>{props.age} smurf years old</p>
        <button className="list-btn" onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
      </div>
  );
};

export default Smurf;

