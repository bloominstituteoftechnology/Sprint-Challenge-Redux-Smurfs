import React from 'react';
const Smurfs = ({ smurfs }) => {
  return (
    <div>
      {smurfs.map((smurf, i) => (
        <ul key={i}>
          <li>{smurf.name}</li>
          <li>{smurf.age}</li>
          <li>{smurf.height}</li>
        </ul>
      ))}
    </div>
  );
};
export default Smurfs;
