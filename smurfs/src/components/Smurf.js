import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteSmurf } from '../actions/index';

const Smurf = props => {
  const { smurf } = props

  const clickHandler = () => {
    props.deleteSmurf(smurf.id)
  }

  return (
    <div key={smurf.id} className="smurf">
      <p onClick={clickHandler} className="x">X</p>
      <p>{smurf.name}</p>
      <p>{smurf.age} years young</p>
      <p>{smurf.height}</p>
      <Link to={`/${smurf.id}`}>Update</Link>
    </div>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { deleteSmurf })(Smurf);