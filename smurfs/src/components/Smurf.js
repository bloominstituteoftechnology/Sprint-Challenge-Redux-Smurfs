import React from 'react'

//export default ({ name, age, height, id }) => (
export default ({ smurf }) => (
  <div className="Smurf">
    <div>Name: {smurf.name}</div>
    <div>Age: {smurf.age}</div>
    <div>Height: {smurf.height}</div>
    <div>ID: {smurf.id}</div>
    <hr/>
  </div>
)

