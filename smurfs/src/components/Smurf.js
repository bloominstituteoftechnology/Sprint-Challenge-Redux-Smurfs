import React from 'react'
import { Link } from 'react-router-dom'

const Smurf = (props) => (
  <div>
    {props.name} -
    {props.age} -
    {props.height}
    <Link to={`/edit/${props.id}`}><button>Edit</button></Link>
    <button onClick={() => props.deleteSmurf(props.id)}>Delete</button>
  </div>
)

export default Smurf