import React from 'react';

const SmurfCard = props => {
  const { name, age, height } = props.smurf;
  return (
    <div className="Smurf">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Height: {height}</p>
      <button
        onClick={e => props.deleteSmurf(e, props.id)}
        className="smurfCardButton">
        Delete
      </button>
    </div>
  );
};

export default SmurfCard;
