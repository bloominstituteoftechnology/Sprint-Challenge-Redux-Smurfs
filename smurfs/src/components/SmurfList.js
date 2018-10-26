import React from 'react'
import Smurf from './Smurf'

const SmurfList = props => {
    return (
        <div>
            {props.smurfList.map(smurf => {
               return( <ul key={smurf.height}>
                   <Smurf smurf={smurf}/> 
                </ul>
               )
            })}
        </div>
    )
}

export default SmurfList;