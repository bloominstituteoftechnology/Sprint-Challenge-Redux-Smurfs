import React from 'react'
import PropTypes from 'prop-types'

const Smurf = props => (
  <div className='Smurf' data-id={props.id}>
    <p className='Smurf--detail'>Name: {props.name}</p>
    <p className='Smurf--detail'>Age: {props.age}</p>
    <p className='Smurf--detail'>height: {props.height}</p>
  </div>
)

Smurf.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.number
}

const Smurfs = ({ smurfs }) => (
  <div className='Smurfs'>
    {smurfs.map(smurf => <Smurf key={smurf.id} {...smurf} />)}
  </div>
)

Smurfs.propTypes = {
  smurfs: PropTypes.array
}

export default Smurfs
