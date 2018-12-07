import React from "react";
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions';
import Smurf from './Smurf';

function SmurfList(props) {
  return (
      <div>
      {props.smurfs.map(smurf => (
        <Smurf key={smurf.name}
        smurf={smurf}
        deleteSmurf={props.deleteSmurf.bind(null, smurf.id)} />
      ))}
      </div>
  )
}

export default connect(null, { deleteSmurf })(SmurfList);
