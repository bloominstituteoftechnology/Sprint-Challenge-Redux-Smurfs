import React from "react";

function SmurfCard(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>height: {props.height}</p>
      <p>age: {props.age}</p>
    </div>
  );
}

export default SmurfCard;
