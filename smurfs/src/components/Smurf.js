import React from "react";

const Smurf = (props) => {
   console.log(props.smurf)
   return(
      <div>
         <p>{props.smurf.name} Smurf is {props.smurf.age} years old and {props.smurf.height} tall</p>
      </div>
   )
}

export default Smurf