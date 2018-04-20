import React from 'react';
import axios from 'axios';

const deleteSmurf = (cb, id) => {
  cb();
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(response => cb());
}

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} Smurf years old</p>
      <button onClick={() => deleteSmurf(props.cb, props.id)}>Banish This Smurfity Smurf!</button>
    </div>
  );
};

export default Smurf;