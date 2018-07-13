import React from 'react'

export default (props) => {
  return (
    <li>
      <div>{props.name}</div>
      <div>{props.age}</div>
      <div>{props.height}</div>
    </li>
  )
}
