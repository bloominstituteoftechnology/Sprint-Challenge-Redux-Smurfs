import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return(
    <div>
        {props.smurfs.map(smurf=>{
        <Smurf smurf={smurf}></Smurf>
        })}
    </div>
    )
}

export default SmurfList;