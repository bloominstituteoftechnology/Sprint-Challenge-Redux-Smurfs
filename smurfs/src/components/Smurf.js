import React from 'react'
import { connect } from 'react-redux'

import { deleteSmurf } from '../actions'

const Smurf = props => {
  return (
    <div>
      <span>
        <strong>Name:</strong> {props.name}
      </span>
      <br />
      <span>
        <strong>Age:</strong> {props.age}
      </span>
      <br />
      <span>
        <strong>Height:</strong> {props.height}
      </span>
      <br />
      <br />
      <button onClick={() => props.deleteSmurf(props.id)}>Delete Smurf</button>
    </div>
  )
}

export default connect(
  null,
  { deleteSmurf }
)(Smurf)
