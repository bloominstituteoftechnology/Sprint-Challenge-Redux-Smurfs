import React from 'react'
import PropTypes from 'prop-types'
​
const Smurf = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    style={ {
    }}
  >
    {text}
  </li>
)
​
Smurfs.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
​
export default Smurfs