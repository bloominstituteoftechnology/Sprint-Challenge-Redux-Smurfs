import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { deleteSmurf } from '../actions/index';
import '../index.css'
const Smurf = props => {
  return (
    <div className="Smurf">
      <NavLink className="link" to={`/smurfs/${props.id}`}>Click here to visit your smurf friends profile</NavLink>
      <h3>{props.name}</h3>
      <strong>{props.height}in tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>

  );
};

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {
    deleteSmurf
  }
)(Smurf);

