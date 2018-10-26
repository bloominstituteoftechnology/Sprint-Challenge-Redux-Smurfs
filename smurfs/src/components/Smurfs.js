import React from "react";
import './App.css';

export default function Smurfs(props) {
  return (
    <div className="smurfs">
      <h3>{props.name}</h3>
      <strong>{props.height}</strong>
      <p>{props.age}</p>
    </div>
  );
}