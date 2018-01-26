import React from 'react';

const SmurfList = (props) => {
  if (!props.smurfs.length) {
    props.smurfs.name = 'Everyone is out after Gargomel';
  }
  return (
    <ul>
      {console.log('Smurfs', props.smurfs)}
       {props.smurfs.map((smurf, i) => {
        return <li key={i}>{smurf.name}</li>
      })}
    </ul>
  )
}

export default SmurfList;
