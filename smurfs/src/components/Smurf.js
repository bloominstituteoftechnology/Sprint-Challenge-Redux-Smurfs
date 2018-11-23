import React from 'react'

const Smurf = props => {
 return(
 <div>
  <h1>{props.name}</h1> 
  <h3>{props.height}</h3> 
  <h4>{props.age}</h4>
  <form>
   <input
   onChange={props.inputHandler}
   type="text"
   name="name"
   value={props.stateName}
   />
   <input
   onChange={props.inputHandler}
   type="text"
   name="age"
   value={props.stateAge}
   />
   <input
   onChange={props.inputHandler}
   type="text"
   name="height"
   value={props.stateHeight}
   />
   <button>Add Smurf</button>
  </form>
 </div>
 )
}

export default Smurf