import React from "react";
import "./App.css";
// import { prependOnceListener } from "cluster";

const Smurf = (props) => {
  return <li>{props.smurf.name}</li>;
};

export default Smurf;