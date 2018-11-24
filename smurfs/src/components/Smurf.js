import React from 'react'

const Smurf = props => {
 return(
 <div>
  <h1>{props.name}</h1> 
  <h3>{props.height}</h3> 
  <h4>{props.age}</h4>
 </div>
 )
}

export default Smurf