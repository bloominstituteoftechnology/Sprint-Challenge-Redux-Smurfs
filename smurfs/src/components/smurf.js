import React from 'react';

import XSquare from '../assets/svgs/x-square';

const Smurf = ({ smurf }) => (
  <li>
    <div className="smurf-content">
      <div>{smurf.name}</div>
      <div>{smurf.age}</div>
      <div>{smurf.height}</div>
    </div>
    <XSquare id={smurf.id} />
  </li>
);

export default Smurf;
