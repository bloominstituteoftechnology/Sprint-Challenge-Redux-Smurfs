import React from 'react';
import { connect } from 'react-redux';
import { deletingSmurf } from "../actions";

const Smurf = props => {
  return (
    <li onClick={() => props.deletingSmurf(props.smurf.id)}>
      {props.smurf.name}
    </li>
  );
};

export default connect(
  null,
  { deletingSmurf }
)(Smurf);