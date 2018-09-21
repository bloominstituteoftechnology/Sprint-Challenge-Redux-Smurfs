import React from "react";

export default function SelectedSmurf(props) {
  return (
    <div>
      <h3>{props.selected.name}</h3>
      <span onClick={() => props.handleShowSmurf({})}> X </span>
      <div>{props.selected.age}</div>
      <div>{props.selected.height}</div>
    </div>
  );
}
