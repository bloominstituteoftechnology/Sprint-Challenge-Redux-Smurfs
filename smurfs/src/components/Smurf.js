import React from 'react';

const Smurf = ({ smurf }) => {
  return (
    <div>
      <h3>{smurf.name}</h3>
      <p>{smurf.height}</p>
      <p>{smurf.age}</p>
    </div>
  );
};

export default Smurf;
