import React from 'react';

const Smurf = props => {
  const { name, age, height } = props.smurf;
  return (
    <div>
      <div>
        <h3>{name}</h3>
        <strong>{height} tall</strong>
        <p>{age} smurf years old</p>
      </div>
      <div>
        <button>Update</button>
        <button onClick={props.delete}>Delete</button>
      </div>
    </div>
  );
};

export default Smurf;
