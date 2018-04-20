import React from 'react'
import PropTypes from 'prop-types'

const AddSmurfForm = props => (
  <form className='ASF' onSubmit={e => props.addSmurf(e)}>
    <label htmlFor='name'>Name</label>
    <input type='text' className='ASF--input' name='name' />
  </form>
)

AddSmurfForm.propTypes = {
  addSmurf: PropTypes.func
}

export default AddSmurfForm
