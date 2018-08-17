import React from 'react'

const Smurfs = props => {
   return (
     <div>
     {props.smurfs.map(smurf => {
       return (
         <div key={smurf.name}>
          {smurf.name} <br/>
          {smurf.age} years old and still alive bb<br/>
          {smurf.height}
          </div>
       )
     })}
     </div>
   )
}

export default  Smurfs;
