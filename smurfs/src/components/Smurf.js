import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions/index'

const Smurf = props => {
  const { Smurf, deleteSmurf } = props

  const clickHandler = () => {
    deleteSmurf(Smurf.id)
  }

  return (
    <div key={avenger.id} className="avenger-card">
      <p className="close-button" onClick={clickHandler}>X</p>
      <Link to={`/smurfs/${smurf.id}`}>
        <h3>{Smurf.name}</h3>
      </ Link>
      <strong>{Smurf.height} tall</strong>
      <p>{Smurf.age} smurf years old</p>
      <Link to={`/update/${Smurf.id}`}>Update</Link>
    </div>
  )
}
const mapStateToProps = () => ({})
export default connect(mapStateToProps, { deleteSmurf })(Smurf)