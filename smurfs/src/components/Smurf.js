import React from 'react';

const Smurf = props => {
  const { name, age, height } = props.smurf;
  return (
    <div className="smurf">
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{height}</h2>
    </div>
  );
};

export default Smurf;
