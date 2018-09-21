import React from "react";
function Smurf(props) {
  return (
    <div>
      <p>
        <strong>{props.name}</strong>
      </p>
      <p>{props.age}</p>
      <p> {props.height}</p>
    </div>
  );
}
export default Smurf;