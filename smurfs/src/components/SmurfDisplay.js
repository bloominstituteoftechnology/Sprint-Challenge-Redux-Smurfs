import React from 'react';

const SmurfDisplay = props => {
  return(
    <div className="smurf-display">
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
      <div>Height: {props.height}</div>
      <button onClick={props.deselect}>Close</button>
    </div>
  );
}

export default SmurfDisplay;
