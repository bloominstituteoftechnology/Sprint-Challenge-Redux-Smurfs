import React from 'react'
import PropTypes from 'prop-types'

const AddSmurfForm = props => (
  <form
    className='ASF'
    onSubmit={e => {
      const inputNodes = document.getElementsByClassName('ASF--input')
      const newSmurf = {
        name: inputNodes[0].value,
        age: inputNodes[1].value || 0,
        height: inputNodes[2].value
      }
      props.addSmurf(newSmurf)
      e.preventDefault()
    }}
  >
    <label htmlFor='name'>Name</label>
    <input type='text' className='ASF--input' name='name' />

    <label htmlFor='age'>Age</label>
    <input type='text' name='age' className='ASF--input' />

    <label htmlFor='height'>Height</label>
    <input type='text' name='height' className='ASF--input' />

    <button type='submit'>Submit</button>
  </form>
)

AddSmurfForm.propTypes = {
  addSmurf: PropTypes.func
}

export default AddSmurfForm
