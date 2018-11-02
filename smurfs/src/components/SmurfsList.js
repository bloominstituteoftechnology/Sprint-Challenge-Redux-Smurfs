import React from 'react';
import Smurf from "./Smurf";

const SmurfsList = ( props ) =>
{
  return(
    <div>
      {
        props.smurfs.map( ( smurf, index ) =>
        {
          return( <Smurf smurf = { smurf } key = { index }/> )
        })
      }
    </div>
  )
}

export default SmurfsList;