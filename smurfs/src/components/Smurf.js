import React from "react";
import '../components/App.css';
import '../components/App.css';

const Smurf = props => {
  return (
      <div className="Smurf">
          <h2>Hi, I am {props.smurf.name}</h2>
          <h4>I am {props.smurf.age} years old.</h4>
          <h4>I am {props.smurf.height} tall.</h4>
          <button  className="btn-delete" onClick={() => props.deleteSmurf(props.smurf.id)}>Remove</button>
      </div>
  );
};

export default Smurf;