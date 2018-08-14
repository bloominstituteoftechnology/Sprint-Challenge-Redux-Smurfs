import React from 'react'
import { connect } from 'react-redux'
import { deleteSmurf } from '../actions'

const Smurfs = ({smurfs, deleteSmurf}) =>
  smurfs.map(smurf =>
    <div 
      style={{
        border: '10px solid cornflowerblue',
        width: '500px',
        textAlign: 'center',
        margin: '20 0'
      }}
    >
      <h1>{smurf.name}</h1>
      <button onClick={() => {deleteSmurf(smurf.id)}}>delete</button>
    </div>
  )

const mapStateToProps = ({smurfs}) => ({smurfs})

export default connect(mapStateToProps, { deleteSmurf })(Smurfs)
  
