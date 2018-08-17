import React from 'react';

export default function SmurfsList(props) {
  return (
    <div>
      <ul>{props.smurfs.map((smurf, index) =>
        <li key={index}>{smurf.name}<br/>
        {smurf.age} <br/>
        {smurf.height}</li>)}
        
      </ul>
    </div>
  )
}
