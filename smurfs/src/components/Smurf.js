import React from "react";

export default function Smurf({ name, age, height }) {
  return (
    <div>
      <h2>
        Name: {name} <span>X</span>
      </h2>
      <h4>Age: {age}</h4>
      <h4>Height: {height}</h4>
    </div>
  );
}
