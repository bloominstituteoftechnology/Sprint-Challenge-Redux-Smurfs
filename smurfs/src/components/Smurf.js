import React from 'react';
import { connect } from 'react-redux';
import { deleteSmurf } from '../actions/index';

const Smurf = props => {
  const { smurf } = props

  const clickHandler = () => {
    props.deleteSmurf(smurf.id)
  }

  return (
    <div key={smurf.id}>
      <p onClick={clickHandler}>X</p>
      <p>{smurf.name}</p>
      <p>{smurf.age} years young</p>
      <p>{smurf.height}</p>
    </div>
  )
}

const mapStateToProps = () => ({})

export default connect(mapStateToProps, { deleteSmurf })(Smurf);