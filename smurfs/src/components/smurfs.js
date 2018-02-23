import React from 'react';



const Smurfs = (props) => {
  return (
  <ul>
    {props.smurfs.map((smurf, i) => {
      return <li>
        <div>{smurf.name}</div>
        <div>{smurf.age}</div>
        <div>{smurf.height}</div>
      </li>
    })}
  </ul>
  );
}

export default Smurfs;