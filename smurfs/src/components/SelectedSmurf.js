import React from 'react';
import "./Smurfs.css";

export default function SelectedSmurf(props) {
  return (
    <div className="selectedSmurf">
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleShowSmurf({})}> Click here to close Smurf </span>
      <div>{props.selected.height}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.handleDeleteSmurf()}>{`Delete ${
        props.selected.name
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.name
      }`}</button>
    </div>
  );
}