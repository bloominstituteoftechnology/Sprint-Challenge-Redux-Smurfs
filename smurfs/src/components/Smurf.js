import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index.js';

const Smurf = props => {
  return (
    <div style={{border:"2px solid pink", padding:"10px", width:"50%", display:'flex', alignItems:'center', flexDirection:'column'}}>
      <h1 style={{fontSize:"2rem"}}>Name: {props.smurf.name}</h1>
      <ul>
        <li>Age: {props.smurf.age}</li>
        <li>Height: {props.smurf.height} cm</li>
      </ul>
      <button onClick={() => props.deleteSmurf(props.smurf.id, props.index)}> Delete Smurf </button>
    </div>
  );
};

export default connect(null, { deleteSmurf })(Smurf);
