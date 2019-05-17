import React from 'react';

export default function SelectedSmurf(props) {
  return (
    <div>
      <h4 className="h4">{props.selected.name} <span className="x-spot" onClick={() => props.handleShowSmurf({})}> X </span></h4>
     
      <div>Email: {props.selected.email}</div>
      <div>Age: {props.selected.age}</div>
      <button className="select-btn" onClick={() => props.handleDeleteSmurf()}>{`Delete ${
        props.selected.name
      }`}</button>
      <button className="select-btn" onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.name
      }`}</button>
    </div>
  );
}