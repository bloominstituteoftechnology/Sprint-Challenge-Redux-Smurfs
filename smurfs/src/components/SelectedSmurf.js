import React from 'react';

export default function SelectedSmurf(props) {
  return (
    <div>
      <h4>{props.selected.name}</h4>
      <span onClick={() => props.handleShowSmurf({})}> Click here to close Smurf </span>
      <div>{props.selected.height}</div>
      <div>{props.selected.age}</div>
      <button onClick={() => props.handleDeleteFriend()}>{`Delete ${
        props.selected.name
      }`}</button>
      <button onClick={() => props.toggleShowUpdate()}>{`Update ${
        props.selected.name
      }`}</button>
    </div>
  );
}