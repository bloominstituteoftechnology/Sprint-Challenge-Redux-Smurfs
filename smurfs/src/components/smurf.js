import React from 'react';

const Smurf = ({ smurf }) => (
  <li>
    <div>{smurf.name}</div>
    <div>{smurf.age}</div>
    <div>{smurf.height}</div>
  </li>
);

export default Smurf;
