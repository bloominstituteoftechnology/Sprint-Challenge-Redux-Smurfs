import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/deleteSmurf';
import '../styles/smurfs.css';



const Smurfs = (props) => {
  return (
  <ul>
    {props.smurfs.map((smurf, i) => {
      return <li key={smurf.id}>
        <div>{smurf.name}</div>
        <div>{smurf.age}</div>
        <div>{smurf.height}</div>
        <button onClick={() => props.deleteSmurf({  })}>Delete</button>
      </li>
    })}
  </ul>
  );
}

// export default Smurfs;

export default connect(null, { deleteSmurf })(Smurfs);