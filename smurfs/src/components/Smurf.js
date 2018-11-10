import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/index'

const Smurf = props => {
  const { smurf, deleteSmurf } = props

  const clickHandler = () => {
    deleteSmurf(smurf.id)
  }

  return (
    <div key={smurf.id} className="smurf-info">
      <p className="close-button" onClick={clickHandler}>X</p>
      <Link to={`/smurfs/${smurf.id}`}>
        <h3>{smurf.name}</h3>
      </ Link>
      <strong>{smurf.height} tall</strong>
      <p>{smurf.age} smurf years old</p>
      <Link to={`/update/${smurf.id}`}>Update</Link>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteSmurf })(Smurf)