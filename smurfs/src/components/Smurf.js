import React from 'react';
import {Link} from 'react-router-dom'
import { deleteSmurf } from '../actions'
import { connect } from 'react-redux'

const Smurf = props => {
  const button = props.location
  ? <Link to={`/smurfs/`}> <button> Village Square </button> </Link>
  : <Link to={`/smurfs/${props.id}`}> <button> My Hut </button> </Link>
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      {button}
      <div onClick={() => props.deleteSmurf(props.id)}> Banish </div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    smurfsFetched: state.smurfsFetched,
    smurfs: state.smurfs
  }
}

export default connect(mapStatetoProps,
  {deleteSmurf})
  (Smurf)
