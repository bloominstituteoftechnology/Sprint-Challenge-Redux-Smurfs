import React from 'react';

const Smurf = ({smurf}) => (
  <div>
    <p>{smurf.name}</p>
    <p>{smurf.age}</p>
    <p>{smurf.height}</p>
  </div>
)

export default Smurf;